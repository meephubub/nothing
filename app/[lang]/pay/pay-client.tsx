'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import PaymentoButton from '@/components/PaymentoButton';

export default function PayClient({ dict, lang }: { dict: any, lang: string }) {
    const router = useRouter();

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 select-none flex flex-col items-center gap-8">
            <h1 className="text-[8vw] font-black text-white uppercase tracking-tighter leading-none opacity-90 mix-blend-overlay pointer-events-none text-center">
                {dict.pay.title}
            </h1>

            <div className="flex flex-col items-center gap-6 pointer-events-auto z-20">
                <p className="text-white text-xl max-w-md text-center opacity-80">
                    {dict.pay.description}
                </p>

                <div className="flex flex-col gap-4 w-full">
                    <button
                        onClick={() => window.open('https://ko-fi.com/payfornothing', '_blank')}
                        className="cursor-target w-full px-8 py-4 bg-[#333333] text-white text-lg font-bold uppercase tracking-wider hover:bg-[#444444] transition-all shadow-[4px_4px_0_0_rgba(255,255,255,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_rgba(255,255,255,0.2)] active:translate-x-0 active:translate-y-0 active:shadow-none"
                    >
                        {dict.pay.cta_kofi}
                    </button>

                    <PaymentoButton
                        amount={10}
                        currency="USD"
                        className="cursor-target w-full px-8 py-4 bg-[#1a1a1a] text-white text-lg font-bold uppercase tracking-wider hover:bg-[#2a2a2a] transition-all shadow-[4px_4px_0_0_rgba(255,255,255,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_rgba(255,255,255,0.2)] active:translate-x-0 active:translate-y-0 active:shadow-none"
                        label={dict.pay.cta_crypto}
                    />
                </div>

                <Link href={`/${lang}`} className="text-white/60 hover:text-white text-sm uppercase tracking-widest transition-colors cursor-target mt-4">
                    {dict.pay.cancel}
                </Link>

            </div>
        </div>
    );
}
