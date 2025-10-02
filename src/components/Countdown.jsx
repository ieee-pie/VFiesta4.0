import React, { useEffect, useMemo, useState } from 'react'

// Utility to compute remaining days and hours
function diffDaysHours(from, to) {
  const ms = Math.max(0, to.getTime() - from.getTime())
  const day = 24 * 60 * 60 * 1000
  const hour = 60 * 60 * 1000
  const days = Math.floor(ms / day)
  const hours = Math.floor((ms % day) / hour)
  return { days, hours }
}

export default function Countdown({ targetDate }) {
  // Default target: Oct 18, 2025 in local time
  const target = useMemo(() => (targetDate instanceof Date ? targetDate : new Date(2025, 9, 18, 0, 0, 0)), [targetDate])

  const [remaining, setRemaining] = useState(() => diffDaysHours(new Date(), target))

  useEffect(() => {
    // Update every minute is sufficient for hours/days granularity
    const update = () => setRemaining(diffDaysHours(new Date(), target))
    update()
    const id = setInterval(update, 60 * 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <div className="text-center py-10">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
        <span className="text-red-700 " style={{ fontFamily: 'Montserrat' }}>{remaining.days}</span> DAYS, <span style={{ fontFamily: 'Montserrat' }} className="text-red-700">{remaining.hours}</span> HOURS TO GO !
      </h2>
    </div>
  )
}