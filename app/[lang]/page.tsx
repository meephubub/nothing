import { getDictionary } from "@/lib/dictionary";
import PageClient from "./page-client";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <PageClient dict={dict} lang={lang} />;
}