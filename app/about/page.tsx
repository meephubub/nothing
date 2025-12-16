'use client';

export default function AboutPage() {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 select-none flex flex-col items-center gap-8">
            <h1 className="text-[8vw] font-black text-white uppercase tracking-tighter leading-none opacity-90 mix-blend-overlay pointer-events-none text-center">
                About Nothing
            </h1>

            <div className="flex flex-col items-center gap-4 pointer-events-auto z-20 max-w-2xl text-center">
                <p className="text-white text-xl opacity-80 leading-relaxed">
                    Nothing is comprehensive. It is the absence of everything, yet it contains infinite potential.
                    We specialize in delivering high-quality, premium-grade void.
                </p>
                <p className="text-white text-xl opacity-80 leading-relaxed">
                    Our mission is to provide you with the finest lack of content available on the market today.
                </p>
            </div>
        </div>
    );
}
