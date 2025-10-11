export default function CommunityPartners() {
  const partners = [
    { name: "GDG IILM", image: "/logos/gdgIILM.png" },
    { name: "FIEM ACM", image: "/logos/fiemacm_mx8uox.jpg" },
    { name: "Ascent Circle", image: "/logos/Ascent_circle.jpg" },
    { name: "AIALCHEMIST", image: "/logos/aialchemist.PNG" },
    { name: "CodeCrax", image: "/logos/Codecrax.png" },
    { name: "EventsInfo", image: "/logos/eventinfo.png" },
    { name: "Tech Fusion", image: "/logos/tech-fusion.png" },
    { name: "Events Info", image: "/logos/events-info.png" },
    { name: "Hack Loop", image: "/logos/hack-loop.png" },
    { name: "Developers", image: "/logos/developers.png" },
    { name: "The Student Spot", image: "/logos/student-spot.png" },
    { name: "Ascent", image: "/logos/ascent.png" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20  text-white">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-purple-500">
            Community Partners
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Our success is driven by the support of a strong and vibrant network of communities.
          </p>
        </div>

        {/* Logo rows (two scrolling rows) */}
        <div className="space-y-8 overflow-hidden">
          {/* Row 1 */}
          <div className="relative group">
            <div className="flex gap-6 animate-scroll-left group-hover:paused">
              {[...partners.slice(0, 6), ...partners.slice(0, 6)].map((partner, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="relative flex-shrink-0 w-64 h-44 rounded-2xl overflow-hidden border-2 border-purple-600 hover:border-purple-400 transition transform-gpu hover:scale-105"
                  style={{
                    // background image fills entire card including corners
                    backgroundImage: `url(${partner.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    // optional fallback color if image has transparency
                    backgroundColor: "#0b1020",
                  }}
                >
                  {/* Optional dim overlay to improve text contrast */}
                  <div className="absolute inset-0 bg-black/20"></div>

                  {/* Bottom name label */}
                  <div className="absolute left-0 right-0 bottom-0 bg-black/70 py-2 text-center">
                    <span className="text-sm md:text-base font-semibold text-purple-300">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative group">
            <div className="flex gap-6 animate-scroll-right group-hover:paused">
              {[...partners.slice(6), ...partners.slice(6)].map((partner, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="relative flex-shrink-0 w-64 h-44 rounded-2xl overflow-hidden border-2 border-purple-600 hover:border-purple-400 transition transform-gpu hover:scale-105"
                  style={{
                    backgroundImage: `url(${partner.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#0b1020",
                  }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute left-0 right-0 bottom-0 bg-black/70 py-2 text-center">
                    <span className="text-sm md:text-base font-semibold text-purple-300">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scroll-left 25s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scroll-right 25s linear infinite;
        }
        .group-hover\\:paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
