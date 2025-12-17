'use client';

export default function AboutPage() {
    return (
        <div className="fixed inset-0 z-10 select-none flex items-center justify-center px-4 sm:px-6">
            <div className="flex flex-col items-center gap-6 sm:gap-8 text-center">
                <h1 className="
                    font-black text-white uppercase tracking-tighter leading-none
                    opacity-90 mix-blend-overlay pointer-events-none
                    text-[clamp(3rem,10vw,8rem)]
                ">
                    About Nothing
                </h1>

                <div className="
                    pointer-events-auto z-20
                    max-w-sm sm:max-w-md md:max-w-2xl
                    flex flex-col gap-3 sm:gap-4
                ">
                    <p className="text-white opacity-80 leading-relaxed text-base sm:text-lg">
                        Nothing is comprehensive. It is the absence of everything, yet it contains infinite potential.
                        We specialize in delivering high-quality, premium-grade void.
                    </p>

                    <p className="text-white opacity-80 leading-relaxed text-base sm:text-lg">
                        Our mission is to provide you with the finest lack of content available on the market today.
                    </p>
                </div>
            </div>
        </div>
    );
}