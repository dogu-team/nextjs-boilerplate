import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Dogu Nextjs Boilerplate | Dogu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Welcome to Dogu Nextjs Boilerplate</h1>
        <p>{t('common:hello')}</p>
      </div>
    </>
  );
}
