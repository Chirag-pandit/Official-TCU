"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import Lenis from "@studio-freight/lenis"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

// 3D Animated Sphere Component
function AnimatedSphere({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.5
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={position}>
      <MeshDistortMaterial color={color} attach="material" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
    </Sphere>
  )
}

// Loading Screen Component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="text-6xl font-bold   bg-clip-text text-transparent animate-pulse">
            TCUVERSE
          </div>
          <div className="absolute inset-0 blur-3xl opacity-30 animate-pulse" />
        </div>

        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="font-mono text-sm text-muted-foreground">INITIALIZING MARVEL UNIVERSE... {progress}%</div>
      </div>
    </div>
  )
}

export default function Hero() {
  const targetDate = new Date("2025-11-23T00:00:00")
  const [loading, setLoading] = useState(true)
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Countdown timer
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

    return () => {
      clearInterval(interval)
      lenis.destroy()
    }
  }, [])

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* 3D Background Canvas */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <AnimatedSphere position={[-3, 2, -2]} />
          <AnimatedSphere position={[3, -1, -3]}  />
          <AnimatedSphere position={[0, 3, -5]}  />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Animated Background Overlay */}
      <div className="fixed inset-0 -z-5">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_50%)] animate-pulse" />

        {/* Infinity Stone inspired particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-pink-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(236,72,153,0.8)]"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-32 left-1/4 w-3 h-3 bg-violet-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(139,92,246,0.8)]"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-20 right-1/3 w-3 h-3 bg-fuchsia-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(217,70,239,0.8)]"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(192,132,252,0.8)]"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10 w-full max-w-7xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* System Init Text */}
          <div className="text-sm sm:text-base font-mono text-purple-400 animate-pulse mb-4 sm:mb-6 tracking-wider">
            &gt; MARVEL UNIVERSE INITIALIZED...
          </div>

          {/* Logo with enhanced animation */}
          <div className="mb-8 sm:mb-12 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-3xl opacity-30 animate-pulse" />
              <img
                src="/TCU%20logo1.png"
                alt="TCUVERSE 2025 - INNOVATE TO INSPIRE"
                className="relative w-full max-w-3xl mx-auto h-auto px-4 drop-shadow-[0_0_50px_rgba(168,85,247,0.5)]"
              />
            </div>
          </div>

          {/* Epic Tagline */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative w-20 h-20 border-2 border-purple-500 rounded-full animate-spin-slow flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.6)]">
              <div className="w-16 h-16 border-2 border-pink-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-40" />
            </div>
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                THIS DECEMBER 6th
              </div>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                BE READY!
              </div>
            </div>
          </div>

          {/* Countdown Timer with Marvel-inspired design */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            {Object.entries(countdown).map(([key, value], index) => (
              <div key={key} className="relative group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-violet-500/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
                <div className="relative border-2 border-purple-500/50 p-6 sm:p-8 bg-card/90 backdrop-blur-xl rounded-xl hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent mb-2 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-purple-300 uppercase tracking-widest">{key}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="https://tcu-hack-verse.devfolio.co/">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 border-2 border-purple-400 text-lg px-10 py-7 font-bold rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Apply with Devfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
              </Button>
            </a>
            <a href="/tcu_verse.txt" download="tcu_verse.txt">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 text-lg px-10 py-7 font-bold rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-transparent"
              >
                Download Guidelines
              </Button>
            </a>
          </div>

          {/* Social Links Section with Marvel theme */}
          <div className="relative mx-4 sm:mx-auto max-w-4xl mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur-2xl animate-pulse" />
            <div className="relative border-2 border-purple-500/50 bg-card/80 backdrop-blur-xl p-8 sm:p-10 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.2)]">
              <div className="text-sm sm:text-base font-mono text-purple-400 mb-6 sm:mb-8 tracking-widest">
                &gt; JOIN THE MARVEL UNIVERSE
              </div>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
                {["Facebook", "Instagram", "LinkedIn", "Twitter", "Discord"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="group relative text-base sm:text-lg font-bold text-purple-400 hover:text-pink-400 transition-all duration-300 hover:scale-110"
                  >
                    <span className="relative z-10">{social}</span>
                    <div className="absolute inset-0 bg-purple-500/20 scale-0 group-hover:scale-150 transition-transform duration-300 rounded-lg blur-md" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <div className="pt-12 sm:pt-16">
            <div className="flex items-center justify-center gap-4 text-purple-300 text-sm sm:text-base font-bold tracking-wider">
              <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-pink-500 animate-pulse" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                INNOVATE TO INSPIRE
              </span>
              <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-l from-transparent via-pink-500 to-purple-500 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
