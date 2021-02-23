import React from "react";
import { css } from "@emotion/css";
import Head from "next/head";
import Image from "next/image";

const siteTitle = "News";

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",

    minHeight: "100vh",
  }),
  nav: css({
    width: "100%",
    height: "5rem",
    maxHeight: "5rem",
    padding: "0.625rem 1.25rem",
  }),
  logoWrapper: css({
    display: "flex",
    height: "100%",
    alignItems: "center",
  }),
  logo: css({
    width: "1.875rem",
    height: "1.875rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  logoImg: css({
    width: "100%",
    height: "100%",
  }),
};

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
      <nav className={styles.nav}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <Image
              src="/img/logo.svg"
              className={styles.logoImg}
              width={30}
              height={30}
              alt="Logo"
            />
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
