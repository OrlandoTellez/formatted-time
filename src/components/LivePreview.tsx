import { useEffect, useState } from "react"
import {
  formatTime,
  formatDate,
  formatDateTime,
  countdown,
  timeElapsed,
  customTimeFormat
} from "../lib/timeFunctions"

const functions: Record<string, () => string> = {
  formatTime,
  formatDate,
  formatDateTime,
  countdown,
  timeElapsed,
  customTimeFormat
}

export default function LivePreview({ fnName }: { fnName: string }) {
  const [result, setResult] = useState("Cargando...")

  useEffect(() => {
    const update = () => {
      try {
        const fn = functions[fnName]
        if (!fn) {
          setResult("Función no encontrada.")
          return
        }

        const value = fn()
        setResult(String(value))
      } catch (err) {
        setResult("Error al ejecutar la función.")
      }
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [fnName])

  return <pre>{result}</pre>
}