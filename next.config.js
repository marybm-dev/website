/** @type {import('next').NextConfig} */
module.exports = {
  // Static export. DigitalOcean App Platform serves the _static folder,
  // so `npm run export` keeps writing there.
  output: 'export',
  distDir: '_static',
  images: { unoptimized: true },
  trailingSlash: true,
}
