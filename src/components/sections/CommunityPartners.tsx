export default function CommunityPartners() {
  const partners = [
    { name: "Coming soon", query: "tech community logo with K letter" },
    { name: "Coming soon", query: "girls leading tech community logo" },
    { name: "Coming soon", query: "apex circle tech community logo" },
    { name: "Coming soon", query: "google developer group siliguri logo" },
    { name: "Coming soon", query: "probcoder programming community logo" },
    { name: "Coming soon", query: "code crafting developer community logo" },
    { name: "Coming soon", query: "tech fusion community logo" },
    { name: "Coming soon", query: "events info tech community logo" },
    { name: "Coming soon", query: "hack loop hackathon community logo" },
    { name: "Coming soon", query: "developers community logo" },
    { name: "Coming soon", query: "the student spot community logo" },
    { name: "Coming soon", query: "ascent tech community logo" },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 ">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-purple-500">Community Partners</h2>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Our success is driven by the support of a strong and vibrant network of communities.
          </p>
        </div>

        {/* Animated Logo Rows */}
        <div className="space-y-8 overflow-hidden">
          {/* First Row - Left to Right */}
          <div className="relative group">
            <div className="flex gap-6 animate-scroll-left group-hover:paused">
              {[...partners.slice(0, 6), ...partners.slice(0, 6)].map((partner, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="flex-shrink-0 w-64 h-40 bg-[oklch(0.2_0.05_280)] border-2 border-[oklch(0.488_0.243_264.376)] rounded-lg flex items-center justify-center p-6 hover:border-[oklch(0.627_0.265_303.9)] transition-colors"
                >
                  <img
                    src={`/.jpg?height=120&width=200&query=${partner.query}`}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative group">
            <div className="flex gap-6 animate-scroll-right group-hover:paused">
              {[...partners.slice(6), ...partners.slice(6)].map((partner, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="flex-shrink-0 w-64 h-40 bg-[oklch(0.2_0.05_280)] border-2 border-[oklch(0.488_0.243_264.376)] rounded-lg flex items-center justify-center p-6 hover:border-[oklch(0.627_0.265_303.9)] transition-colors"
                >
                  <img
                    src={`/.jpg?height=120&width=200&query=${partner.query}`}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scroll-left 20s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scroll-right 20s linear infinite;
        }
        /* Pause on hover */
        .group-hover\\:paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
