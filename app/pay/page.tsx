'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function PayPage() {
    const router = useRouter();
    const [amount, setAmount] = useState<string>('10');

    const handlePay = async () => {
        try {
            const val = parseFloat(amount);
            if (isNaN(val) || val < 0.5) {
                alert('Please enter a valid amount (minimum $0.50)');
                return;
            }

            const response = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: Math.round(val * 100) }),
            });
            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error('No Checkout URL returned');
            }
        } catch (error) {
            console.error('Error creating Checkout Session:', error);
        }
    };

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 select-none flex flex-col items-center gap-8">
            <h1 className="text-[8vw] font-black text-white uppercase tracking-tighter leading-none opacity-90 mix-blend-overlay pointer-events-none text-center">
                Pay for Nothing
            </h1>

            <div className="flex flex-col items-center gap-6 pointer-events-auto z-20">
                <p className="text-white text-xl max-w-md text-center opacity-80">
                    You are about to pay for absolutely nothing. No goods, no services, just pure void.
                </p>

                <div className="flex items-center gap-2 border-b-2 border-white pb-2">
                    <span className="text-4xl font-bold text-white">$</span>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="bg-transparent text-4xl font-bold text-white w-32 text-center focus:outline-none cursor-target"
                        min="0.50"
                        step="0.01"
                    />
                </div>

                <button
                    onClick={handlePay}
                    className="cursor-target px-8 py-3 bg-white text-black text-lg font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
                >
                    Confirm Payment
                </button>

                <Link href="/" className="text-white/60 hover:text-white text-sm uppercase tracking-widest transition-colors cursor-target">
                    Cancel
                </Link>
            </div>
        </div>
    );
}
