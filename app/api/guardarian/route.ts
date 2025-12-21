import { NextResponse } from 'next/server';

const GUARDARIAN_API_URL = 'https://api-payments.guardarian.com/v1';

export async function POST(req: Request) {
    try {
        const apiKey = process.env.GUARDARIAN_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: 'Guardarian API key not configured' }, { status: 500 });
        }

        const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

        let body;
        try {
            body = await req.json();
        } catch (e) {
            body = {};
        }

        // Default: 10 USD -> USDT (or BTC, configurable)
        const fromAmount = body.amount || 10;
        const fromCurrency = body.from_currency || 'USD';
        const toCurrency = body.to_currency || 'BTC';

        const response = await fetch(`${GUARDARIAN_API_URL}/transaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
            body: JSON.stringify({
                from_amount: fromAmount,
                from_currency: fromCurrency,
                to_currency: toCurrency,
                redirects: {
                    successful: `${origin}/?success=true`,
                    cancelled: `${origin}/?canceled=true`,
                    failed: `${origin}/?failed=true`,
                },
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Guardarian API error:', errorData);
            return NextResponse.json({ error: errorData.message || 'Guardarian API error' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json({ url: data.redirect_url });
    } catch (err: any) {
        console.error('Guardarian route error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
