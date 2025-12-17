'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 select-none flex flex-col items-center gap-8">
        <h1 className="text-[15vw] font-black text-white uppercase tracking-tighter leading-none opacity-90 mix-blend-overlay">
          nothing
        </h1>

        <div className="flex flex-col items-center gap-4 pointer-events-auto z-20">
          <button
            className="cursor-target px-6 py-2 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
            onClick={() => router.push('/pay')}
          >
            Give Us Money.
          </button>
        </div>
      </div>

      <div className="fixed bottom-6 left-6 z-20 cursor-target">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl sm:text-5xl font-black text-white tabular-nums tracking-tight">
            34
          </span>
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/70">
            people
          </span>
        </div>
        <span className="block text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-white/60 mt-1">
          have given money
        </span>
      </div>
    </>
  );
}