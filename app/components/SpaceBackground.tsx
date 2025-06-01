'use client'
import { useEffect, useRef } from 'react'

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Star class
    class Star {
      x: number
      y: number
      size: number
      speed: number
      brightness: number
      opacity: number
      color: string

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 1.5
        this.speed = Math.random() * 0.2
        this.brightness = Math.random()
        this.opacity = Math.random()
        // Random star colors
        const colors = ['#ffffff', '#fff7f7', '#f0f0ff', '#ffebeb', '#e6f0ff']
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.y += this.speed
        if (this.y > canvas!.height) {
          this.y = 0
          this.x = Math.random() * canvas!.width
        }
        this.opacity = Math.sin(Date.now() * 0.0005 + this.brightness) * 0.5 + 0.5
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`
        ctx.fill()

        // Add star glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        )
        gradient.addColorStop(0, `${this.color}${Math.floor(this.opacity * 100).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    // Create stars
    const stars: Star[] = []
    for (let i = 0; i < 300; i++) {
      stars.push(new Star())
    }

    // Draw nebula
    const drawNebula = () => {
      if (!ctx) return
      const gradient = ctx.createRadialGradient(
        canvas!.width * 0.5, canvas!.height * 0.5, 0,
        canvas!.width * 0.5, canvas!.height * 0.5, canvas!.width * 0.8
      )
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.1)')
      gradient.addColorStop(0.5, 'rgba(236, 72, 153, 0.05)')
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas!.width, canvas!.height)
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.fillStyle = 'rgba(17, 24, 39, 0.1)'
      ctx.fillRect(0, 0, canvas!.width, canvas!.height)

      drawNebula()
      stars.forEach(star => {
        star.update()
        star.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(to bottom, #0f172a, #1e293b)' }}
    />
  )
} 