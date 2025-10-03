import { useEffect, useState } from 'react';

const commands = [
  '$ sudo ./tcuverse_protocol.sh --initialize --mode=elite',
  '$ python3 elite_scanner.py --scan-candidates',
  '$ ./verify_legend_status.exe --check-achievements',
  '$ access_granted: tcuverse_database',
  '$ node hall_of_fame_executor.js',
  '[████████████████████████████] 100% COMPLETE',
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev < commands.length ? prev + 1 : prev));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="border-2 border-accent bg-card/50 p-6 font-mono text-sm backdrop-blur-sm">
          {commands.slice(0, visibleLines).map((cmd, index) => (
            <div key={index} className="mb-2">
              <span className="text-accent">{cmd}</span>
              {index === visibleLines - 1 && <span className="animate-pulse">_</span>}
            </div>
          ))}
          
          {visibleLines === commands.length && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">
                SPIRE COMPLETERS
              </h2>
              <p className="text-muted-foreground">
                Recognizing those who conquered the ultimate challenge.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
