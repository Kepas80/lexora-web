# Lexora Web - Push to GitHub
# Run this in PowerShell from the lexora-web folder

Set-Location $PSScriptRoot

git init
git branch -M main
git remote remove origin 2>$null
git remote add origin https://github.com/Kepas80/lexora-web.git
git add .
git commit -m "feat: migrate from Figma Make to GitHub + Vercel workflow"
git push -u origin main --force

Write-Host ""
Write-Host "Done! The code is now on GitHub." -ForegroundColor Green
Write-Host "Next: Go to vercel.com and import the Kepas80/lexora-web repo."
