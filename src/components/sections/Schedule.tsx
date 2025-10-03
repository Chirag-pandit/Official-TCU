"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase } from "lucide-react"


gsap.registerPlugin(ScrollTrigger)

export default function Schedule() {
  const events = [
    {
      title: "Registration Opens",
      date: "1 October 2025",
      time: "12:00 AM",
    },
    {
      title: "Registration Closes",
      date: "10 November 2025",
      time: "11:59 PM",
    },
    {
      title: "PPT Round",
      subtitle: "Top 100 Teams",
      date: "15 November 2025",
      time: "10:00 AM",
    },
    {
      title: "Hackathon Begins",
      subtitle: "Top 10 Teams - Offline",
      date: "20 November 2025",
      time: "09:00 AM",
    },
    {
      title: "Lunch Break",
      date: "20 November 2025",
      time: "01:00 PM",
    },
    {
      title: "Mentoring Session",
      date: "20 November 2025",
      time: "03:00 PM",
    },
    {
      title: "Final Submission",
      date: "20 November 2025",
      time: "05:00 PM",
    },
    {
      title: "Results Announced",
      date: "20 November 2025",
      time: "06:00 PM",
    },
  ]

  const titleRef = useRef<HTMLHeadingElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const eventRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title on load
      gsap.from(titleRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power4.out",
      })

      // Animate timeline line progressively
      gsap.from(timelineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      })

      // Animate each event card
      eventRefs.current.forEach((eventRef, index) => {
        if (!eventRef) return

        const isLeft = index % 2 === 0

        // Card entrance animation
        gsap.from(eventRef, {
          opacity: 0,
          x: isLeft ? -100 : 100,
          scale: 0.8,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: eventRef,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        })

        // Node pulse animation
        const node = eventRef.querySelector(".timeline-node")
        gsap.to(node, {
          scale: 1.2,
          duration: 0.6,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          scrollTrigger: {
            trigger: eventRef,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play pause resume pause",
          },
        })

        // Card hover effect on scroll
        gsap.to(eventRef, {
          y: -10,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: eventRef,
            start: "top 60%",
            end: "top 40%",
            scrub: 1,
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="schedule" className="min-h-screen px-4 py-20  overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <Briefcase className="w-16 h-16 text-purple-500 mb-6" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-purple-500">Event Schedule</h2>
          <p className="text-lg md:text-xl text-gray-400 font-mono">
            Explore the timeline of our event.
          </p>
        </div>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600 -translate-x-1/2 hidden md:block"
          />

          {/* Events - Vertical Layout */}
          <div className="space-y-24">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  ref={(el) => {
                    eventRefs.current[index] = el
                  }}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col gap-8`}
                >
                  {/* Event Card */}
                  <div className={`w-full md:w-5/12 ${isLeft ? "md:text-right" : "md:text-left"} text-center`}>
                    <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 shadow-2xl shadow-purple-500/20 hover:shadow-pink-500/40 transition-all duration-300">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{event.title}</h3>
                      {event.subtitle && (
                        <p className="text-base md:text-lg font-semibold text-purple-300 mb-3">{event.subtitle}</p>
                      )}
                      <p className="text-base text-gray-300 mb-1">{event.date}</p>
                      <p className="text-lg font-mono text-pink-400 font-bold">{event.time}</p>
                    </div>
                  </div>

                  {/* Timeline Node - Center */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
                    <div className="timeline-node relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white shadow-lg shadow-purple-500/50 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white" />
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-pink-500 blur-xl opacity-50 animate-pulse" />
                    </div>
                  </div>

                  {/* Mobile Node */}
                  <div className="md:hidden">
                    <div className="timeline-node relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white shadow-lg shadow-purple-500/50 flex items-center justify-center mx-auto">
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="w-full md:w-5/12 hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-24 text-center">
          <p className="text-xl text-gray-400 font-mono">8-Hour Intensive Hackathon Experience</p>
        </div>
      </div>
    </section>
  )
}
