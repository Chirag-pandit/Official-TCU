import { useEffect, useState } from 'react';

interface SystemStat {
  label: string;
  value: string;
}

export default function SystemMonitor() {
  const [stats, setStats] = useState<SystemStat[]>([
    { label: 'CPU', value: '0%' },
    { label: 'MEM', value: '0%' },
    { label: 'NET', value: '0 KB/s' },
    { label: 'TEMP', value: '0°C' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats([
        { label: 'CPU', value: `${Math.floor(Math.random() * 40 + 30)}%` },
        { label: 'MEM', value: `${Math.floor(Math.random() * 20 + 70)}%` },
        { label: 'NET', value: `${Math.floor(Math.random() * 500 + 100)} KB/s` },
        { label: 'TEMP', value: `${Math.floor(Math.random() * 20 + 45)}°C` },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      
          
      

    </>
  );
}
