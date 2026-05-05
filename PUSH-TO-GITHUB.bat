@echo off
echo ============================================
echo   Lexora Web - Push to GitHub
echo ============================================
echo.

cd /d "%~dp0"

git config user.email "ipalominorobles@gmail.com"
git config user.name "Kepas80"
git add .
git commit -m "feat: migrate from Figma Make to GitHub + Vercel workflow"
git push -u origin main --force

echo.
echo ============================================
echo   Done! Check https://github.com/Kepas80/lexora-web
echo ============================================
pause
