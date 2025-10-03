export default function Terminal() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl  rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-purple-500  font-bold text-primary mb-4">MARVEL GROUPS</h2>
          <p className="text-muted-foreground text-lg">Legendary teams that shaped the Marvel Universe</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl  border-accent hover:border-primary transition-all duration-300">
          <img src="/marvel-groups-horizontal.jpg" alt="Marvel Groups" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  )
}
