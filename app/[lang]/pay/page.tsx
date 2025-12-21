import { getDictionary } from "@/lib/dictionary";
import PayClient from "./pay-client";

export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "es" }];
}

export default async function PayPage({
    params,
}: {
    params: Promise<{ lang: "en" | "es" }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return <PayClient dict={dict} lang={lang} />;
}
