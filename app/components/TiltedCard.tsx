'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface TiltedCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubLink: string
  demoLink?: string
}

export default function TiltedCard({
  title,
  description,
  image,
  tags,
  githubLink,
  demoLink,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useTransform(y, [0, 1], [15, -15])
  const rotateY = useTransform(x, [0, 1], [-15, 15])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width
    const yPct = mouseY / height
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="project-image-container">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="project-image"
          priority
        />
        <motion.div
          className="project-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project-content">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
} 