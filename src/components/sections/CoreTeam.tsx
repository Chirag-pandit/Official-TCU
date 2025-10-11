"use client"

import { Users, Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Chirag Pandit",
    designation: "Co-Founder and Tech Lead",
    image: "/chirag.jpg",
    linkedin: "https://www.linkedin.com/in/chirag-pandit-672017317/", // 🔗 Add actual LinkedIn link
  },
  {
    name: "Kanak Sharma",
    designation: "Co-Founder and Tech Lead",
    image: "/Kanak.jpg",
    linkedin: "https://www.linkedin.com/in/kanak-sharma-573b9529b/", // 🔗 Add your LinkedIn link
  },
  {
    name: "Rohit Sharma",
    designation: "Co-Founder and Graphics Lead",
    image: "/rohit.jpg",
    linkedin: "https://www.linkedin.com/in/rohitsharmaji2694/", // 🔗 Example
  },
  {
    name: "Abhishek Maurya",
    designation: "Sponsor Team Head",
    image: "/Abhi.jpg",
    linkedin: "https://www.linkedin.com/in/abhishek-maurya2204/",
  },
  {
    name: "Namit Kr. Singh",
    designation: "Sponsors Team Head",
    image: "/namit.jpg",
    linkedin: "https://www.linkedin.com/in/namit-kumar-singh-3b74a6338/",
  },
  {
    name: "Keshav Gupta",
    designation: "PR Team Head",
    image: "/Keshav.jpg",
    linkedin: "https://www.linkedin.com/in/keshav-gupta-83201431a/",
  },
  {
    name: "Ritika Yadav",
    designation: "Volunteer Team Head",
    image: "/Ritika.jpg",
    linkedin: "https://www.linkedin.com/in/ritika-yadav-189b9137a/",
  },
]

export default function CoreTeam() {
  return (
    <section id="core-team" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <Users className="w-16 h-16 text-purple-500 mb-6" />
          <h2 className="text-6xl md:text-8xl font-bold text-purple-500 tracking-tight">ORGANIZERS</h2>
          <p className="text-lg md:text-xl text-gray-400 font-mono mt-4">
            The driving force behind TCU Verse Hackathon 2025.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative cursor-pointer">
              {/* Circular Image Container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden rounded-full border-4 border-gray-800 transition-all duration-500 group-hover:border-pink-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50"
                />

                {/* Hover Overlay with Name and Designation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-500 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-purple-400 uppercase tracking-wider font-mono transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    {member.designation}
                  </p>
                </div>
              </div>

              {/* Name + LinkedIn Icon */}
              <div className="mt-4 text-center flex flex-col items-center">
                <p className="text-lg md:text-xl font-semibold text-white transition-colors duration-300 group-hover:text-pink-500">
                  {member.name}
                </p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-purple-400 hover:text-pink-500 transition-colors duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
