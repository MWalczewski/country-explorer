"use client";

import { ThemeProvider } from "next-themes";
import { AbstractIntlMessages } from "next-intl";
import IntlProviderWrapper from "@/wrappers/IntlProviderWrapper";

type ProvidersProps = {
  children: React.ReactNode;
  locale: "en" | "pl";
  messages: AbstractIntlMessages;
};

export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <IntlProviderWrapper locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </IntlProviderWrapper>
  );
}
