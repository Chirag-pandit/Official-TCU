import { Users } from 'lucide-react';

export default function CommunityPartners() {
  return (
    <section id="community-partners" className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <Users className="w-16 h-16 text-primary animate-float" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
          COMMUNITY PARTNERS
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono">
          Organizations that help us grow and reach more innovators.
        </p>

        <div className="border border-primary p-8 bg-card/50 backdrop-blur-sm">
          {/* Add community partners content here */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Community partner logos will go here */}
          </div>
        </div>
      </div>
    </section>
  );
}
