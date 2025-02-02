"use client";

import React from "react";
import { useTranslations } from "next-intl";

const ContactPage = () => {
  const t = useTranslations("contact");

  return (
    <div>
      <h1>{t("pageInProgress")}</h1>
      <h2>{t("seeYouSoon")}</h2>
    </div>
  );
};

export default ContactPage;
