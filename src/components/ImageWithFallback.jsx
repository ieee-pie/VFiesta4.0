import React from 'react'

export default function ImageWithFallback({ src, alt, className, width = 300, height = 200, text = 'Missing image', ...props }) {
  const fallback = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'><rect width='${width}' height='${height}' fill='%23eee'/><text x='10' y='${Math.floor(
    height / 2
  )}' fill='%23999' font-size='12'>${encodeURIComponent(text)}</text></svg>`
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback
      }}
      {...props}
    />
  )
}
