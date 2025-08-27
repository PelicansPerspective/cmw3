# Cambrian Minds Website Documentation

## Deployment

The Cambrian Minds Website is built with Vite and React. This document outlines the deployment process and configuration.

### Build Process

To build the website for production:

1. Install dependencies:
   ```
   npm install
   ```

2. Build the project:
   ```
   npm run build
   ```

3. The built files will be in the `dist` directory.

### Deployment Options

#### Option 1: Static Hosting (Recommended)

The built website can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Amazon S3
- Firebase Hosting

#### Option 2: Traditional Web Server

If deploying to a traditional web server:

1. Upload the contents of the `dist` directory to the server
2. Configure the server to route all requests to `index.html` for client-side routing

### Environment Variables

Create a `.env` file in the project root with the following variables:

```
VITE_API_URL=https://api.example.com
```

### Post-Deployment Verification

After deploying, verify:

1. All pages load correctly
2. Navigation works properly
3. Forms submit as expected
4. Images and assets load correctly
5. Mobile responsiveness

## Maintenance

Regular maintenance tasks:

1. Update dependencies regularly
2. Test across multiple browsers
3. Optimize images and assets
4. Monitor performance metrics
