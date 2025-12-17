'use client';

export default function AboutPage() {
    return (
        <div className="fixed inset-0 z-10 select-none flex items-center justify-center px-4 sm:px-6 py-10 sm:py-12 overflow-y-auto">
            <div className="flex flex-col gap-6 sm:gap-8 max-w-sm sm:max-w-md md:max-w-3xl w-full">

                <h1
                    className="font-black text-white uppercase tracking-tight leading-none text-[clamp(2.25rem,7vw,4.75rem)] border-b border-white/20 pb-3"
                >
                    Unlimited want.
                    <br />
                    Finite resources.
                </h1>

                <div className="grid gap-6 sm:gap-7 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-start">

                    <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-white">
                        <p className="opacity-100">
                            unlimited want, finite resources, the basic economic problem. well now you have a solution. you can buy nothing. you buy nothing all the time, unused subscriptions, unclaimed insurance, a new boiler.
                        </p>
                        <p className="opacity-100">
                            except now you finally know where that money goes, nowhere.
                            you can find the advantages to buying nothing yourself, perhaps out of protest, or to seem "niche" and part of an avant-garde group, or maybe you simply have so much money you don't know what to do with it, and don't want to throw your notes out of the window to the delighted faces of the public.
                        </p>
                        <p className="opacity-100">
                             once you buy, this very well may be the first thing you ever own, you don't own your house or a subscription, but this is it. you own nothing.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-5">
                        <div className="border border-white bg-white text-black px-4 sm:px-5 py-4 sm:py-5 text-xs sm:text-sm font-medium uppercase tracking-[0.18em] leading-relaxed shadow-[6px_6px_0_0_rgba(255,255,255,0.4)]">
                            <p className="mb-2 opacity-70">Quote, probably:</p>
                            <p>
                                You will own nothing, and for once it will actually be yours.
                            </p>
                        </div>

                        <div className="text-[0.7rem] sm:text-xs text-white/60 uppercase tracking-[0.2em] space-y-1">
                            <p>Modern brutalism // Financial minimalism // Anti-product product</p>
                            <p className="border-t border-dashed border-white/20 pt-2">
                                This is not an investment. It&apos;s an exit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}