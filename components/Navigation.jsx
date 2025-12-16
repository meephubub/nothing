'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { cn } from '@/lib/utils'; // Assuming this exists, or I'll standard clsx/tailwind-merge
import Dither from './Dither'; // Not needed here? Ah, user wants it on page.

// Since I don't know if lib/utils exists for sure (it usually does in shadcn-like setups, but I'll check or inline clsx/tw-merge safe usage if I can't confirm. The package.json has clsx and tailwind-merge. I'll stick to standard imports if utils is missing, but I'll try to be safe).
// Actually, I'll just use standard template literals or a simple helper if needed, but given the file list earlier showed 'lib' dir, it probably has utils.
// Wait, I saw components.json earlier, so it's likely a shadcn setup.
// Let me verify lib exists from file list in step 4. yes "lib" isDir.

/**
 * @param {{ links?: { label: string, href: string }[] }} props
 */
export default function Navigation({ links = [] }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const overlayRef = useRef(null);
    const linksRef = useRef(null);

    const tlRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ paused: true });
        tlRef.current = tl;

        tl.to(overlayRef.current, {
            duration: 0.5,
            height: '100vh',
            ease: 'power3.inOut',
        });

        tl.to(linksRef.current?.children || [], {
            duration: 0.4,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: 'power3.out',
        }, '-=0.2');

        return () => {
            tl.kill();
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            tlRef.current?.play();
        } else {
            tlRef.current?.reverse();
        }
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Header */}
            <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-6 pointer-events-none">
                <button
                    onClick={toggleMenu}
                    className="pointer-events-auto bg-black text-white p-2 px-3 rounded-md hover:opacity-70 transition-opacity focus:outline-none"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto bg-black text-white p-2 px-4 rounded-md">
                    <h1 className="text-2xl font-bold tracking-tighter uppercase">nothing</h1>
                </div>
            </div>

            {/* Overlay */}
            <div
                ref={overlayRef}
                className="fixed top-0 left-0 w-full h-0 bg-black z-40 overflow-hidden flex items-center justify-center pointer-events-none data-[open=true]:pointer-events-auto"
                data-open={isOpen}
            >
                <ul ref={linksRef} className="text-center space-y-8">
                    {links.map((item, i) => (
                        <li key={item.label} className="translate-y-10 opacity-0">
                            <Link
                                href={item.href}
                                className="text-6xl md:text-8xl font-black text-white hover:text-gray-400 transition-colors tracking-tighter uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
