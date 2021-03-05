import React from "react";
import { css, cx } from "@emotion/css";
import Head from "next/head";
import { Box } from "@chakra-ui/layout";

const siteTitle = "News";

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    alignItems: 'flex-start',

    minHeight: "100vh",
  }),
};

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Box className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Box pt={1} pb={10} pl={5} pr={5} h={'100%'} w={'100%'}>{children}</Box>
    </Box>
  );
};

export default Layout;
