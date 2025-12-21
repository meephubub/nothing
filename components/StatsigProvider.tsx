'use client';

import { ReactNode, useEffect, useState } from 'react';
import { StatsigClient } from '@statsig/js-client';
import { StatsigProvider as StatsigProviderBase } from '@statsig/react-bindings';

let statsigClient: StatsigClient | null = null;

export default function StatsigClientProvider({ children }: { children: ReactNode }) {
    const [client, setClient] = useState<StatsigClient | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const initClient = async () => {
            const clientKey = process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY;

            // If no key, skip Statsig entirely
            if (!clientKey) {
                console.warn('NEXT_PUBLIC_STATSIG_CLIENT_KEY not set, Statsig disabled');
                setIsReady(true);
                return;
            }

            try {
                if (!statsigClient) {
                    statsigClient = new StatsigClient(clientKey, {});
                }
                await statsigClient.initializeAsync();
                setClient(statsigClient);
                setIsReady(true);
            } catch (error) {
                console.error('Statsig initialization error:', error);
                setIsReady(true);
            }
        };
        initClient();
    }, []);

    // Always render children to avoid blocking UI
    if (!isReady || !client) {
        return <>{children}</>;
    }

    return (
        <StatsigProviderBase client={client}>
            {children}
        </StatsigProviderBase>
    );
}
