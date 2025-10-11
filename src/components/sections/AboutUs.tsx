import { MessageSquare, Sparkles, Trophy, Code2 } from "lucide-react"

export default function AboutUs() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-16 "
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-8 flex justify-center gap-4">
            <MessageSquare className="w-12 h-12 text-purple-500 animate-pulse" />
            <Sparkles className="w-12 h-12 text-purple-400 animate-pulse delay-100" />
            <Code2 className="w-12 h-12 text-purple-500 animate-pulse delay-200" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 bg-clip-text text-transparent">
            ABOUT US
          </h2>

          <p className="text-lg md:text-xl text-purple-300/80 mb-4 font-mono">
            Learn more about TCU verse Hackathon 2025 and our mission to foster innovation.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="border-2 border-purple-500/30 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-black via-purple-950/30 to-black backdrop-blur-sm shadow-2xl shadow-purple-500/20 mb-16">
          <div className="space-y-6 text-center">
            <div className="inline-block p-4 bg-purple-500/10 rounded-full mb-4">
              <Trophy className="w-12 h-12 text-purple-400" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-purple-300 mb-6">Get Ready for a Thrilling Journey</h3>

            <p className="text-lg md:text-xl text-purple-200/90 leading-relaxed max-w-4xl mx-auto">
              Get ready for a thrilling journey of innovation and creativity. Step into exciting coding challenges,
              showcase your talent, and compete for amazing swags and prizes.
            </p>

            <div className="pt-6 border-t border-purple-500/20 mt-8">
              <p className="text-base md:text-lg text-purple-300/70 leading-relaxed">
                TCU verse Hackathon is a 8 Hour premier event bringing together innovators, developers, and creators to build
                the future. Join us in pushing the boundaries of technology and creativity.
              </p>
            </div>
          </div>
        </div>

        {/* Photo Collage Section */}
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Moments from Our Journey
          </h3>

          {/* Collage Grid */}
          <div className="grid grid-cols-4 grid-rows-3 gap-3 md:gap-4 max-w-6xl mx-auto h-[600px]">
            {/* Large featured image - top left */}
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl border-2 border-purple-500/30 shadow-lg shadow-purple-500/20">
              <img
                src="/arena.jpg"
                alt="Hackathon team collaboration"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Top right - tall */}
            <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-xl border-2 border-purple-500/30 shadow-lg shadow-purple-500/20">
              <img
                src="/manipal.jpg"
                alt="Project presentation"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Middle right - two small squares */}
            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl border-2 border-purple-500/30 shadow-lg shadow-purple-500/20">
              <img
                src="/trop.jpg"
                alt="Prizes and trophies"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl border-2 border-purple-500/30 shadow-lg shadow-purple-500/20">
              <img
                src="/stage.jpg"
                alt="Coding session"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Bottom row - three images */}
            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl border-2 border-purple-500/30 shadow-lg shadow-purple-500/20">
              <img
                src="/Abhi.jpg"
                alt="Networking session"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-xl border-2 border-purple-500/30 shadow-lg shadow-purple-500/20">
              <img
                src="/iit.jpg"
                alt="Hackathon venue"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl border-2 border-purple-500/30 shadow-lg shadow-purple-500/20">
              <img
                src="/lap.jpg"
                alt="Team celebration"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}