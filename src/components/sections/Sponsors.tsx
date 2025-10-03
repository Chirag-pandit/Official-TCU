import { Briefcase } from "lucide-react"

export default function Sponsors() {
  return (
    <section id="sponsors" className="min-h-screen py-20 px-4 ">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <Briefcase className="w-16 h-16 text-purple-500 mb-6" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-purple-500">SPONSORS</h2>
          <p className="text-lg md:text-xl text-gray-400 font-mono">
            Our incredible partners making TCU verse Hackathon possible.
          </p>
        </div>

        {/* Platinum Tier */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="border-2 border-purple-500 px-8 py-3 rounded-full">
              <h3 className="text-xl md:text-2xl font-bold text-purple-400 tracking-wider">PLATINUM TIER</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={`platinum-${i}`}
                className="bg-gray-800 rounded-lg p-12 flex flex-col items-center justify-center min-h-[250px] border border-gray-700"
              >
                <p className="text-3xl font-bold text-gray-400 mb-2">COMING SOON</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Platinum Sponsor</p>
              </div>
            ))}
          </div>
        </div>

        {/* Diamond Tier */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="border-2 border-purple-500 px-8 py-3 rounded-full">
              <h3 className="text-xl md:text-2xl font-bold text-purple-400 tracking-wider">DIAMOND TIER</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={`diamond-${i}`}
                className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 rounded-lg p-12 flex flex-col items-center justify-center min-h-[250px] border border-purple-700"
              >
                <p className="text-3xl font-bold text-gray-400 mb-2">COMING SOON</p>
                <p className="text-sm text-purple-400 uppercase tracking-wide">Diamond Sponsor</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Tier */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="border-2 border-purple-500 px-8 py-3 rounded-full">
              <h3 className="text-xl md:text-2xl font-bold text-purple-400 tracking-wider">GOLD TIER</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={`gold-${i}`}
                className="bg-purple-900/20 rounded-lg p-12 flex flex-col items-center justify-center min-h-[250px] border border-purple-600"
              >
                <p className="text-3xl font-bold text-gray-400 mb-2">COMING SOON</p>
                <p className="text-sm text-purple-300 uppercase tracking-wide">Gold Sponsor</p>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Tier */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="border-2 border-purple-500 px-8 py-3 rounded-full">
              <h3 className="text-xl md:text-2xl font-bold text-purple-400 tracking-wider">SILVER TIER</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-12 flex flex-col items-center justify-center min-h-[250px] border border-gray-600">
              <img src="/ethindia-logo.svg" alt="ETHIndia" className="max-w-full h-auto mb-4" />
              <p className="text-lg font-semibold text-white">ETHIndia</p>
            </div>
            {[1, 2].map((i) => (
              <div
                key={`silver-${i}`}
                className="bg-gray-800 rounded-lg p-12 flex flex-col items-center justify-center min-h-[250px] border border-gray-600"
              >
                <p className="text-3xl font-bold text-gray-400 mb-2">COMING SOON</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Silver Sponsor</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bronze Tier */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="border-2 border-purple-500 px-8 py-3 rounded-full">
              <h3 className="text-xl md:text-2xl font-bold text-purple-400 tracking-wider">BRONZE TIER</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={`bronze-${i}`}
                className="bg-gray-900 rounded-lg p-12 flex flex-col items-center justify-center min-h-[250px] border border-gray-700"
              >
                <p className="text-3xl font-bold text-gray-500 mb-2">COMING SOON</p>
                <p className="text-sm text-gray-600 uppercase tracking-wide">Bronze Sponsor</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
