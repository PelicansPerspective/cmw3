@echo off
echo Installing dependencies for Cambrian Minds Website...
cd /d %~dp0
npm install

echo.
echo Dependencies installed successfully!
echo.
echo To start the development server, run: npm run dev
echo To build for production, run: npm run build
echo.
pause
