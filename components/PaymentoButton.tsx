'use client';

import { useState } from 'react';

interface PaymentoButtonProps {
    amount: number;
    currency?: string;
    label?: string;
    className?: string;
}

export default function PaymentoButton({
    amount,
    currency = 'USD',
    label = 'Pay with Crypto',
    className = ''
}: PaymentoButtonProps) {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/paymento', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount, currency }),
            });
            const data = await res.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error('Paymento error:', data);
                alert(data.error || 'Failed to create transaction');
            }
        } catch (err) {
            console.error('Paymento fetch error:', err);
            alert('Failed to connect to payment service');
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handlePayment}
            disabled={loading}
            className={`cursor-pointer ${className}`}
        >
            {loading ? 'Processing...' : label}
        </button>
    );
}
