// app/loading.tsx

"use client"

import { useEffect, useState } from "react"

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 5 // Random for a natural feel
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#ffffff",
    }}>
      <div style={{
        width: "10%",
        height: "4px",
        backgroundColor: "#00000022",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#000000",
          transition: "width 0.2s ease-out",
        }} />
      </div>
      <div style={{
        marginTop: "12px",
        fontFamily: "'Orbitron', sans-serif",
        fontSize: "14px",
        letterSpacing: "2px",
      }}>
        {Math.floor(progress)}&nbsp;%
      </div>
    </div>
  )
}
