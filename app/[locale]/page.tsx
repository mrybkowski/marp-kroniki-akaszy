import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

interface IHomeProps {
  params: {
    locale: string;
  };
}

const namespaces = ["home", "common"];

export default async function Home({ params: { locale } }: IHomeProps) {
  const { t, resources } = await initTranslations({ locale, namespaces });

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={namespaces}
      resources={resources}
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{t("welcome")}</h1>
      </main>
    </TranslationsProvider>
  );
}
