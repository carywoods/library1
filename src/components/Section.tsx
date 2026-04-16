
import { System, SystemCategory } from '../data/systems';
import SystemCard from './SystemCard';

interface SectionProps {
  title: SystemCategory;
  systems: System[];
  key?: string | number;
}

export default function Section({ title, systems }: SectionProps) {
  if (systems.length === 0) return null;

  return (
    <div className="flex flex-col">
      <div className="text-[12px] uppercase tracking-[0.1em] text-sleek-sub font-semibold border-b border-sleek-border pb-2 mb-3">
        {title}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {systems.map((system) => (
          <SystemCard key={system.id} system={system} />
        ))}
      </div>
    </div>
  );
}
