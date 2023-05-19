import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

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
      <StyledBox>
        <h1>Welcome to Dogu Nextjs Boilerplate</h1>
        <p>{t('common:hello')}</p>
      </StyledBox>
    </>
  );
}

const StyledBox = styled.div`
  display: flex;
`;
