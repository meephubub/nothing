'use client';

import Link from 'next/link';

export default function ThankYouClient({ dict, lang }: { dict: any, lang: string }) {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 select-none flex flex-col items-center gap-8">
            <h1 className="text-[8vw] font-black text-white uppercase tracking-tighter leading-none opacity-90 mix-blend-overlay pointer-events-none text-center">
                {dict.thankYou?.title || "Thank You"}
            </h1>

            <div className="flex flex-col items-center gap-6 pointer-events-auto z-20">
                <p className="text-white text-xl max-w-md text-center opacity-80">
                    {dict.thankYou?.description || "You have successfully paid for nothing."}
                </p>

                <p className="text-white/60 text-lg max-w-md text-center">
                    {dict.thankYou?.message || "Your contribution to the void is appreciated."}
                </p>

                <Link
                    href={`/${lang}`}
                    className="cursor-target px-8 py-4 bg-[#333333] text-white text-lg font-bold uppercase tracking-wider hover:bg-[#444444] transition-all shadow-[4px_4px_0_0_rgba(255,255,255,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_rgba(255,255,255,0.2)] active:translate-x-0 active:translate-y-0 active:shadow-none"
                >
                    {dict.thankYou?.cta || "Return Home"}
                </Link>
            </div>
        </div>
    );
}
