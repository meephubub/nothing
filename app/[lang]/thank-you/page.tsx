import { getDictionary } from "@/lib/dictionary";
import ThankYouClient from "./thank-you-client";

export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "es" }];
}

export default async function ThankYouPage({
    params,
}: {
    params: Promise<{ lang: "en" | "es" }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return <ThankYouClient dict={dict} lang={lang} />;
}
