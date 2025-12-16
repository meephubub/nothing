'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 select-none flex flex-col items-center gap-8">
      <h1 className="text-[15vw] font-black text-white uppercase tracking-tighter leading-none opacity-90 mix-blend-overlay">
        nothing
      </h1>

      <div className="flex flex-col items-center gap-4 pointer-events-auto z-20">
        <button className="cursor-target px-6 py-2 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors" onClick={() => router.push('/pay')}>
          Give Us Money.
        </button>
      </div>
    </div>
  );
}