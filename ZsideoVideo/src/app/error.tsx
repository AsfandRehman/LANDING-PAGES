"use client"

import { useEffect } from "react"

export default function Error({ error,  }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#ffffff",
        fontFamily: "'Orbitron', sans-serif",
        fontSize: "18px",
        letterSpacing: "2px",
        textAlign: "center"
      }}>
        <p>Oops! An unexpected error occurred. Please try again later.</p>
      </body>
    </html>
  )
}
