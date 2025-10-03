"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const targetDate = new Date("2025-12-06T00:00:00")
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })
  const lenisRef = useRef<any>(null)

  // Lenis Smooth Scrolling Setup
  useEffect(() => {
    const loadLenis = async () => {
      const Lenis = (await import("lenis")).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      lenisRef.current = lenis

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    loadLenis()

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  // Countdown Timer Logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance <= 0) {
        clearInterval(interval)
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setCountdown({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen mt-10 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Purple Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
      </div>

      {/* Main Content */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20 md:py-0">
        <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12">
          {/* System Initialize Text */}
          <div className="text-xs md:text-sm font-mono text-purple-400 animate-pulse tracking-widest">
            &gt; INITIALIZING SYSTEM...
          </div>

          {/* Main Title */}
          <div className="space-y-4 md:space-y-6">
            <div className="text-purple-400 text-sm md:text-xl font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase">
              Innovate to Inspire
            </div>

            <h1 className="relative">
              <div className="w-full max-w-4xl mx-auto">
                <img 
                  src="/8.png" 
                  alt="TCU VERSE 2025" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </h1>
          </div>

          {/* Date Badge */}
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <div className="absolute inset-0 border-2 border-purple-500 rounded-full animate-ping opacity-75" />
              <div className="absolute inset-0 border-2 border-purple-400 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-purple-500 rounded-full" />
              </div>
            </div>
            <div className="text-left">
              <div className="text-sm md:text-lg font-bold text-purple-300 tracking-wide">THIS 6 DECEMBER</div>
              <div className="text-xs md:text-base font-mono text-purple-400">BE READY!</div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-2 md:gap-4 lg:gap-6 max-w-4xl mx-auto">
            {Object.entries(countdown).map(([key, value]) => (
              <div key={key} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-900/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative border-2 border-purple-500/50 bg-black/80 backdrop-blur-sm rounded-lg p-3 md:p-6 hover:border-purple-400 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-600 mb-1 md:mb-2 tabular-nums">
                    {value}
                  </div>
                  <div className="text-[0.6rem] md:text-xs font-mono text-purple-400 uppercase tracking-wider">
                    {key}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="https://tcu-hack-verse.devfolio.co/">
          <Button 
            size="lg"
            className="bg-secondary text-background hover:bg-secondary/90 border-2 border-secondary text-lg px-8 py-6 font-mono"
          >
            Apply with Devfolio
          </Button>
          </a>
         <a 
  href="/tcu_verse.txt" 
  download="tcu_verse.txt"
>
  <Button
    size="lg"
    variant="outline"
    className="border-2 border-primary text-primary hover:bg-primary hover:text-background text-lg px-8 py-6 font-mono"
  >
    Guidelines
  </Button>
</a>

        </div>

          {/* Social Links */}
          <div className="mt-8 md:mt-16 border-2 border-purple-500/50 bg-purple-950/20 backdrop-blur-md rounded-lg p-4 md:p-8 max-w-3xl mx-auto hover:border-purple-400/70 transition-all duration-300">
            <div className="text-xs md:text-sm font-mono text-purple-400 mb-3 md:mb-4 tracking-widest">FOLLOW US</div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {["Instagram", "LinkedIn", "Whatsapp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm md:text-base font-mono text-purple-300 hover:text-purple-100 transition-colors duration-300 hover:scale-110 inline-block relative group"
                >
                  {social}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 border border-purple-500/30 rounded-full hidden lg:block" />
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-purple-500/30 rounded-full hidden lg:block" />
        </div>
      </section>
    </div>
  )
}