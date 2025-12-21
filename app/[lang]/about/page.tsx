import { getDictionary } from "@/lib/dictionary";

export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "es" }];
}

export default async function AboutPage({
    params,
}: {
    params: Promise<{ lang: "en" | "es" }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <div className="fixed inset-0 z-10 select-none flex items-center justify-center px-6 py-16 overflow-y-auto">
            <div className="flex flex-col gap-12 max-w-2xl w-full">
                <h1 className="text-[clamp(3rem,10vw,6rem)] font-black text-white uppercase tracking-tighter leading-none">
                    {dict.about.title}
                </h1>

                <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                    <p>{dict.about.p1}</p>
                    <p>{dict.about.p2}</p>
                    <p className="text-white/60">{dict.about.p3}</p>
                    <p>{dict.about.p4}</p>
                </div>

                <p className="text-white/40 text-sm uppercase tracking-[0.3em] border-t border-white/10 pt-8">
                    {dict.about.tagline}
                </p>
            </div>
        </div>
    );
}