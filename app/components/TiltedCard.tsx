'use client'

import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltedCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubLink: string
  demoLink?: string
}

const TiltedCard = ({
  title,
  description,
  image,
  tags,
  githubLink,
  demoLink
}: TiltedCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-100, 100], [12, -12]), {
    stiffness: 300,
    damping: 30
  })
  const rotateY = useSpring(useTransform(x, [-100, 100], [-12, 12]), {
    stiffness: 300,
    damping: 30
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="project-image"
        />
        <div className="project-overlay">
          <div className="project-content">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm mb-4">{description}</p>
            <div className="flex gap-2 flex-wrap justify-center mb-4">
              {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 justify-center">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                GitHub
              </a>
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  View Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TiltedCard 