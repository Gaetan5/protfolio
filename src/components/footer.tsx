import React from "react";
import { useLocaleContext } from "../containers/LocaleCtx";
import { t } from "@/lib/i18n";

export default function Footer() {
  const { locale } = useLocaleContext();
  console.log("useLocaleContext in footer", useLocaleContext);
  return (
    <footer className="mb-5 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        {t("footer_copyright", locale)}
      </small>
    </footer>
  );
}
