/** @type {import('next').NextConfig} */
module.exports = {
  // Static export (writes to out/). Vercel serves this with its Next.js preset.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}
