"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase } from "lucide-react"
gsap.registerPlugin(ScrollTrigger)

const prizes = [
  {
    place: "2nd Prize",
    amount: "₹20,000",
    emoji: "🥈",
    badge: "Silver",
    badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/50",
  },
  {
    place: "1st Prize",
    amount: "₹30,000",
    emoji: "🏆",
    badge: "Gold",
    badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/50",
    isWinner: true,
  },
  {
    place: "3rd Prize",
    amount: "₹15,000",
    emoji: "🥉",
    badge: "Bronze",
    badgeColor: "bg-pink-500/20 text-pink-400 border-pink-500/50",
  },
]

export default function PrizePool() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const cards = cardsRef.current
    const particlesContainer = particlesRef.current

    if (!section || !title || !cards || !particlesContainer) return

    // Create particle elements for crackle blast effect
    const particleCount = 50
    const particles: HTMLDivElement[] = []

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute w-2 h-2 rounded-full"

      // Random colors for particles ( purple, white)
      const colors = [ "bg-purple-500", "bg-white", "bg-purple-400"]
      particle.classList.add(colors[Math.floor(Math.random() * colors.length)])

      particlesContainer.appendChild(particle)
      particles.push(particle)
    }

    // ScrollTrigger animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    })

    // Title animation - scale and glow
    tl.fromTo(
      title,
      {
        scale: 0.5,
        opacity: 0,
        filter: "blur(20px)",
      },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "back.out(1.7)",
      },
    )

    // Crackle blast particle animation
    tl.fromTo(
      particles,
      {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0,
      },
      {
        x: () => (Math.random() - 0.5) * 400,
        y: () => (Math.random() - 0.5) * 400,
        opacity: 1,
        scale: () => Math.random() * 2 + 0.5,
        duration: 1.2,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
          from: "center",
        },
      },
      "-=0.4",
    )

    // Fade out particles
    tl.to(
      particles,
      {
        opacity: 0,
        scale: 0,
        duration: 0.6,
        ease: "power2.in",
      },
      "-=0.4",
    )

    // Cards animation - stagger from bottom
    const cardElements = cards.querySelectorAll(".prize-card")
    tl.fromTo(
      cardElements,
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
        rotateX: -15,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      },
      "-=0.8",
    )

    // Continuous floating animation for cards
    cardElements.forEach((card, index) => {
      gsap.to(card, {
        y: index === 1 ? -15 : -10,
        duration: 2 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      })
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      particles.forEach((particle) => particle.remove())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="prize-pool"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20  relative overflow-hidden"
    >
      {/* Particle container for crackle blast */}
      <div
        ref={particlesRef}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 pointer-events-none z-10"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl text-center relative z-20">
        {/* Title */}
        <div className="mb-12 flex flex-col items-center text-center">
                  <Briefcase className="w-16 h-16 text-purple-500 mb-6" />
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 text-purple-500">Prize Pool</h2>
                  <p className="text-lg md:text-xl text-gray-400 font-mono">
                    Unveiling the prizes for champions.
                  </p>
                </div>

        {/* Prize Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center perspective-1000">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`prize-card relative group ${prize.isWinner ? "md:scale-110 md:-translate-y-4" : ""}`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className={`relative p-8 md:p-10 rounded-2xl transition-all duration-300 ${
                  prize.isWinner
                    ? "bg-zinc-900 border-4 border-purple-500 shadow-[0_0_50px_rgba(255,27,141,0.5)]"
                    : "bg-zinc-900 border-2 border-zinc-800 hover:border-purple-500/30"
                }`}
              >
                {/* Emoji Icon */}
                <div className="text-6xl md:text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {prize.emoji}
                </div>

                {/* Place */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{prize.place}</h3>

                {/* Amount */}
                <p className="text-4xl md:text-5xl font-black text-white mb-6">{prize.amount}</p>

                {/* Badge */}
                <div className={`inline-block px-6 py-2 rounded-full border ${prize.badgeColor} font-semibold text-sm`}>
                  {prize.badge}
                </div>

                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                    prize.isWinner ? "bg-purple-500/5" : "bg-purple-500/10"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background gradient effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}
