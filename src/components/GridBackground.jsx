import React from 'react'

/**
 * GridBackground
 * A reusable background grid overlay that mirrors the provided Tailwind classes.
 *
 * Props:
 * - size (number): grid cell size in px (default 24)
 * - lineColor (string): color of grid lines (default '#80808012')
 * - background (string): background color behind the grid (default 'white')
 * - className (string): extra classes applied to the outer wrapper (defaults to 'relative')
 * - children (ReactNode): content rendered above the grid
 *
 * Usage (pseudo):
 * <GridBackground className="min-h-screen"> ...content... </GridBackground>
 */
export default function GridBackground({
  size = 24,
  lineColor = '#80808012',
  background = 'white',
  className = '',
  children,
}) {
  const style = {
    backgroundColor: background,
    backgroundImage: `linear-gradient(to right, ${lineColor} 1px, transparent 1px), linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)`,
    backgroundSize: `${size}px ${size}px`,
  }

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="absolute inset-0 h-full w-full pointer-events-none"
        style={style}
      />
      {children}
    </div>
  )
}
