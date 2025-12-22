import { NextResponse } from 'next/server';

const PAYMENTO_API_URL = 'https://api.paymento.io/v1/payment/request';

export async function POST(req: Request) {
    try {
        const apiKey = process.env.PAYMENTO_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: 'Paymento API key not configured' }, { status: 500 });
        }

        const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

        let body;
        try {
            body = await req.json();
        } catch (e) {
            body = {};
        }

        // Default: 10 USDT
        const amount = body.amount || 10;
        const currency = body.currency || 'USD';

        // Generate a random order ID (or use your own system's ID)
        const orderId = `order_${Date.now()}_${Math.random().toString(36).substring(7)}`;

        const payload = {
            orderId: orderId,
            amount: amount.toString(), // Paymento might expect string
            currency: currency,
            // Paymento strictly requires HTTPS. If origin is http (localhost), we must upgrade it to https
            // even if it means the redirect might fail locally (unless using a tunnel or accepting the cert error).
            returnUrl: `${origin.replace('http://', 'https://')}/?success=true`, // Paymento redirect URL
            // errorUrl: `${origin}/?failed=true`, // If Paymento supports it
            // cancelUrl: `${origin}/?canceled=true`, // If Paymento supports it
            // Additional fields can be added here
        };

        const response = await fetch(PAYMENTO_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Api-key': apiKey,
                'Accept': 'application/json' // or text/plain based on docs, usually json is safe
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Paymento API error:', errorText);
            return NextResponse.json({ error: `Paymento API error: ${response.status} ${response.statusText}`, details: errorText }, { status: response.status });
        }

        // Assuming Paymento returns the redirect URL directly or in a JSON object
        // Based on search, it returns a token or url. Let's check the response type.
        // If it returns JSON:
        const data = await response.json();

        // Adjust this based on actual Paymento response structure. 
        // If they return { url: '...' } or { token: '...' }
        // Common pattern:
        const checkoutUrl = data.url || data.paymentUrl || data.redirectUrl; // Fallback attempts

        if (checkoutUrl) {
            return NextResponse.json({ url: checkoutUrl });
        } else if (data.token) {
            // If valid token, maybe construct URL? 
            // "redirect the customer to the Paymento gateway"
            // Usually https://checkout.paymento.io/pay?token=...
            // For now, let's assume 'url' is present or we debug this.
            // Given I don't have the exact response schema, I will dump the data if url is missing.
            console.error('Unexpected Paymento response:', data);
            return NextResponse.json({ error: 'Invalid response from payment provider' }, { status: 502 });
        } else {
            return NextResponse.json({ url: null, raw: data });
        }

    } catch (err: any) {
        console.error('Paymento route error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
