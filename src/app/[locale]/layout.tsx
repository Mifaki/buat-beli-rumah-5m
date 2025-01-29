import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

type Messages = Record<string, any>;

type SupportedLocale = (typeof routing.locales)[number];

type Params = Promise<{
  locale: string;
}>;

interface ILocaleLayout {
  children: React.ReactNode;
  params: Params;
}

async function getMessages(locale: string): Promise<Messages> {
  try {
    const messages: Messages = (await import(`@/messages/${locale}.json`)).default;
    return messages;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    notFound();
  }
}

export default async function LocaleLayout({ children, params }: ILocaleLayout) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as SupportedLocale)) {
    notFound();
  }

  const messages: Messages = await getMessages(locale);

  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
    >
      <p>{locale}</p>
      {children}
    </NextIntlClientProvider>
  );
}