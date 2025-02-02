"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>{t("hello")}</h1>
        <h3>{t("welcomeInPoland")}</h3>
        <h3>{t("welcome")}</h3>
      </main>
    </div>
  );
}
