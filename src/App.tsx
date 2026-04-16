/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import { systems, SystemCategory } from './data/systems';

const CATEGORIES: SystemCategory[] = [
  'Core Systems',
  'Domain Systems',
  'Scientific Systems',
  'Experimental Systems',
];

export default function App() {
  return (
    <div className="min-h-screen bg-sleek-bg p-[10px] sm:p-[40px_60px] flex flex-col">
      <Header />
      
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow mb-8">
        {CATEGORIES.map((category) => (
          <Section
            key={category}
            title={category}
            systems={systems.filter((s) => s.category === category)}
          />
        ))}
        
        {/* Empty state if no systems are found */}
        {systems.length === 0 && (
          <div className="py-20 text-center col-span-full">
            <p className="text-sleek-sub text-sm">No systems available in the library at this time.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
