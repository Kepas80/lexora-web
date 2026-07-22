import { Route, Switch } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation } from './components/navigation';
import { LanguageProvider } from './lib/LanguageContext';
import { Footer } from './components/footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { Pricing } from './pages/Pricing';
import { Centros } from './pages/Centros';
import { Help } from './pages/Help';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Method } from './pages/Method';
import { Thanks } from './pages/Thanks';
import { WideImage } from './pages/WideImage';
import { Solutions } from './pages/Solutions';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { TikTok } from './pages/TikTok';
import { TikTokCallback } from './pages/TikTokCallback';

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col font-sans selection:bg-[#2D6BFF]/20 bg-white text-[#0F1A33]">
          <Navigation />

          <main className="flex-grow">
            <Switch>
              <Route path="/" component={Home} />

              <Route path="/que-es" component={About} />
              <Route path="/about" component={About} />

              <Route path="/features" component={Features} />
              <Route path="/funcionalidades" component={Features} />

              <Route path="/pricing" component={Pricing} />
              <Route path="/precios" component={Pricing} />
              <Route path="/centros" component={Centros} />
              <Route path="/para-centros" component={Centros} />

              <Route path="/help" component={Help} />
              <Route path="/ayuda" component={Help} />
              <Route path="/contact" component={Help} />

              <Route path="/terms-of-the-service" component={Terms} />
              <Route path="/terms" component={Terms} />
              <Route path="/terms-of-service" component={Terms} />
              <Route path="/terminos" component={Terms} />

              <Route path="/privacypolicy" component={Privacy} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/privacy-policy" component={Privacy} />
              <Route path="/privacidad" component={Privacy} />

              <Route path="/method" component={Method} />
              <Route path="/metodo" component={Method} />

              <Route path="/thanks" component={Thanks} />
              <Route path="/gracias" component={Thanks} />

              <Route path="/imagen-ancha" component={WideImage} />

              <Route path="/solutions" component={Solutions} />
              <Route path="/soluciones" component={Solutions} />

              <Route path="/blog" component={Blog} />
              <Route path="/blog/:slug" component={BlogPost} />

              <Route path="/tiktok/callback" component={TikTokCallback} />
              <Route path="/tiktok" component={TikTok} />

              {/* 404 Fallback */}
              <Route>
                <div className="pt-32 text-center">
                  <h1 className="text-4xl font-bold text-[#0F1A33]">404 - Página no encontrada</h1>
                  <a href="/" className="mt-4 inline-block text-[#2D6BFF] hover:underline font-medium">
                    Volver al inicio
                  </a>
                </div>
              </Route>
            </Switch>
          </main>

          <Footer />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}
