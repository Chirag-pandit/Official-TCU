export default function CommunityPartners() {
  const partners = [
    { name: "Kode", query: "tech community logo with K letter" },
    { name: "Girls Leading Tech", query: "girls leading tech community logo" },
    { name: "Apex Circle", query: "apex circle tech community logo" },
    { name: "GDG Siliguri", query: "google developer group siliguri logo" },
    { name: "ProbCoder", query: "probcoder programming community logo" },
    { name: "Code Crafting", query: "code crafting developer community logo" },
    { name: "Tech Fusion", query: "tech fusion community logo" },
    { name: "Events.nfo", query: "events info tech community logo" },
    { name: "Hack Loop", query: "hack loop hackathon community logo" },
    { name: "Developers", query: "developers community logo" },
    { name: "The Student Spot", query: "the student spot community logo" },
    { name: "Ascent", query: "ascent tech community logo" },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-black">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold px-8 py-4 border-4 border-[oklch(0.75_0.15_45)] bg-[oklch(0.95_0.02_45)] text-black">
              COMMUNITY PARTNERS
            </h2>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Our success is driven by the support of a strong and vibrant network of communities.
          </p>
        </div>

        {/* Animated Logo Rows */}
        <div className="space-y-8 overflow-hidden">
          {/* First Row - Left to Right */}
          <div className="relative">
            <div className="flex gap-6 animate-scroll-left">
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
          <div className="relative">
            <div className="flex gap-6 animate-scroll-right">
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
    </section>
  )
}
