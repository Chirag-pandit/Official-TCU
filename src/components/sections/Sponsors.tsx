import { Briefcase } from "lucide-react"

type Sponsor = {
  name: string
  image?: string
  tier: "Platinum" | "Diamond" | "Gold" | "Silver" | "Bronze"
}

const sponsors: Sponsor[] = [
  // 🏆 Add your sponsors here
  { name: "ETHIndia", image: "/ethindia-logo.svg", tier: "Silver" },
  { name: "Interview Buddy", image: "/logos/interviewbuddy.png", tier: "Silver" },

  // Example placeholders:
  { name: "COMING SOON", tier: "Platinum" },
  { name: "COMING SOON", tier: "Diamond" },
  { name: "COMING SOON", tier: "Gold" },
  { name: "COMING SOON", tier: "Silver" },
  { name: "COMING SOON", tier: "Bronze" },
]

const tierStyles: Record<Sponsor["tier"], string> = {
  Platinum: "border-purple-500 bg-gray-800",
  Diamond: "border-purple-700 bg-gradient-to-br from-purple-900/30 to-purple-950/30",
  Gold: "border-purple-600 bg-purple-900/20",
  Silver: "border-gray-600 bg-gray-800",
  Bronze: "border-gray-700 bg-gray-900",
}

export default function Sponsors() {
  const tiers: Sponsor["tier"][] = ["Platinum", "Diamond", "Gold", "Silver", "Bronze"]

  return (
    <section id="sponsors" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <Briefcase className="w-16 h-16 text-purple-500 mb-6" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-purple-500">SPONSORS</h2>
          <p className="text-lg md:text-xl text-gray-400 font-mono">
            Our incredible partners making TCU Verse Hackathon possible.
          </p>
        </div>

        {/* Tiers Section */}
        {tiers.map((tier) => {
          const filteredSponsors = sponsors.filter((s) => s.tier === tier)
          return (
            <div key={tier} className="mb-16">
              {/* Tier Title */}
              <div className="flex justify-center mb-8">
                <div className="border-2 border-purple-500 px-8 py-3 rounded-full">
                  <h3 className="text-xl md:text-2xl font-bold text-purple-400 tracking-wider">
                    {tier.toUpperCase()} TIER
                  </h3>
                </div>
              </div>

              {/* Sponsor Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredSponsors.map((sponsor, i) => (
                  <div
                    key={`${tier}-${i}`}
                    className={`${tierStyles[tier]} rounded-lg p-12 flex flex-col items-center justify-center min-h-[250px] border transition-transform hover:scale-[1.02]`}
                  >
                    {sponsor.image ? (
                      <>
                        <img
                          src={sponsor.image}
                          alt={sponsor.name}
                          className="max-w-full h-auto mb-4 object-contain"
                        />
                        <p className="text-lg font-semibold text-white">{sponsor.name}</p>
                      </>
                    ) : (
                      <>
                        <p className="text-3xl font-bold text-gray-400 mb-2">COMING SOON</p>
                        <p className="text-sm text-gray-500 uppercase tracking-wide">
                          {tier} Sponsor
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
