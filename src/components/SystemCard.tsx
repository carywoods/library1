
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { System } from '../data/systems';

interface SystemCardProps {
  system: System;
  key?: string | number;
}

export default function SystemCard({ system }: SystemCardProps) {
  const isComingSoon = system.status === 'Coming Soon';

  return (
    <div className="bg-white border border-sleek-border rounded-[12px] p-[14px] flex flex-col justify-between min-h-[190px] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="mb-2">
        <div className="text-[15px] font-semibold mb-1 text-sleek-main">
          {system.name}
        </div>
        <div className="text-[12px] text-sleek-sub leading-[1.3] mb-[6px] line-clamp-2">
          {system.description}
        </div>
        <div className="text-[11px] text-sleek-main leading-[1.2] mb-1">
          <strong className="font-semibold">Do:</strong> {system.whatYouCanDo}
        </div>
        <div className="text-[11px] text-sleek-main leading-[1.2] mb-1">
          <strong className="font-semibold">Why:</strong> {system.whyItMatters}
        </div>
        <span className={`inline-block text-[10px] font-semibold px-[6px] py-[2px] rounded-[4px] uppercase mt-2 ${
          system.status === 'Active' ? 'bg-[#E1F5FE] text-[#01579B]' :
          system.status === 'Experimental' ? 'bg-[#FFF3E0] text-[#E65100]' :
          'bg-[#F5F5F7] text-[#6E6E73]'
        }`}>
          {system.status}
        </span>
      </div>

      <a
        href={isComingSoon ? undefined : system.url}
        className={`bg-sleek-main text-white py-2 px-3 rounded-[6px] text-[11px] font-medium self-start transition-opacity hover:opacity-90 ${
          isComingSoon ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isComingSoon ? 'Coming Soon' : 'Launch System'}
      </a>
    </div>
  );
}
