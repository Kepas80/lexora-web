// scripts/prerender.mjs
// Post-build prerender: arranca un servidor estático sobre `dist/`,
// abre cada ruta con Puppeteer (Chromium headless), captura el HTML
// renderizado por React y lo guarda como HTML estático en
// `dist/<ruta>/index.html`. Los crawlers que no ejecutan JS (Bingbot,
// Yandex, Baidu, AI bots) verán el contenido real.
//
// Vercel sirve estos archivos antes del SPA rewrite, así Googlebot
// y los demás reciben HTML completo sin ejecutar JS.

import { createServer } from 'node:http'
import { readFile, stat, mkdir, writeFile, cp } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, dirname, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const PORT = 5555

const ROUTES = [
  '/',
  '/que-es',
  '/about',
  '/metodo',
  '/method',
  '/funcionalidades',
  '/features',
  '/precios',
  '/pricing',
  '/soluciones',
  '/solutions',
  '/ayuda',
  '/help',
  '/privacidad',
  '/privacypolicy',
  '/terminos',
  '/terms-of-the-service',
]

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
}

function startServer() {
  const server = createServer(async (req, res) => {
    let urlPath = decodeURIComponent((req.url || '/').split('?')[0])
    if (urlPath === '/') urlPath = '/index.html'
    let filePath = join(DIST, urlPath)
    try {
      const s = await stat(filePath)
      if (s.isDirectory()) filePath = join(filePath, 'index.html')
    } catch {
      // SPA fallback: las rutas client-side caen a index.html
      filePath = join(DIST, 'index.html')
    }
    try {
      const buf = await readFile(filePath)
      res.setHeader('Content-Type', MIME[extname(filePath).toLowerCase()] || 'application/octet-stream')
      res.statusCode = 200
      res.end(buf)
    } catch (err) {
      res.statusCode = 404
      res.end('Not found')
    }
  })
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)))
}

async function prerender() {
  if (!existsSync(DIST)) {
    console.error('[prerender] dist/ no existe. Ejecuta `vite build` antes.')
    process.exit(1)
  }

  console.log('[prerender] Iniciando servidor estatico en :' + PORT)
  const server = await startServer()

  // Import dinámico de puppeteer (sólo cuando se usa)
  let puppeteer
  try {
    puppeteer = (await import('puppeteer')).default
  } catch (e) {
    console.warn('[prerender] puppeteer no instalado, saltando prerender. Ejecuta `npm install` para activarlo.')
    server.close()
    return
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  const results = []
  for (const route of ROUTES) {
    const page = await browser.newPage()
    await page.setUserAgent('Mozilla/5.0 (Prerender; Lexora) Chrome/120 Safari/537.36')
    const url = `http://localhost:${PORT}${route}`
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
      // Espera adicional para Helmet + Suspense lazy chunks
      await new Promise((r) => setTimeout(r, 800))
      const html = await page.content()

      // Quitamos el script de gptengineer si quedase (no aplica aquí, pero por si acaso)
      const cleaned = html.replace(/<script src="https:\/\/cdn\.gpteng\.co[^"]+"[^>]*><\/script>/g, '')

      const outDir = route === '/' ? DIST : join(DIST, route.replace(/^\//, ''))
      await mkdir(outDir, { recursive: true })
      const outFile = join(outDir, 'index.html')
      await writeFile(outFile, cleaned, 'utf8')
      results.push({ route, status: 'ok', bytes: cleaned.length })
      console.log(`[prerender] ${route.padEnd(28)} -> ${cleaned.length.toLocaleString()} bytes`)
    } catch (err) {
      results.push({ route, status: 'error', error: String(err).slice(0, 120) })
      console.error(`[prerender] ${route} FAILED:`, err.message)
    } finally {
      await page.close()
    }
  }

  await browser.close()
  server.close()

  const ok = results.filter((r) => r.status === 'ok').length
  console.log(`\n[prerender] OK ${ok}/${ROUTES.length}`)
  if (ok < ROUTES.length / 2) {
    console.error('[prerender] Demasiados errores, abortando.')
    process.exit(1)
  }
}

prerender().catch((err) => {
  console.error('[prerender] Error fatal:', err)
  process.exit(1)
})
