import React from "react";
import { css } from "@emotion/css";
import Head from "next/head";
import Image from "next/image";
import CardSlider from "./cardSlider";

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
    marginRight: "1rem",
  }),
  logoImg: css({
    width: "100%",
    height: "100%",
  }),
  logoText: css({
    fontWeight: "bold",
  }),
  categoryCarouselWrapper: css({
    paddingLeft: "1.25rem",
    overflowY: "hidden",
    overflowX: "auto",
    display: "inline-flex",
  }),
  categories: css`
    margin: 0 0.3125rem;
    padding: 0.5rem 0.625rem;

    border: none;
    border-radius: 12px;

    &::nth-child(1) {
      margin-left: 0;
      margin-right: 0.3125rem;
    }

    &::last-child {
      margin-right: 0;
      margin-left: 0.3125rem;
    }
  `,
  active: css`
    background-color: #ff4500;
    box-shadow: 0px 8px 24px rgba(37, 37, 39, 0.2);
    color: #f8f8f8;
  `,
};

interface ILayoutProps {
  children: React.ReactNode;
}

const categories = [
    "All",
  "Apple",
  "PlayStation",
  "Microsoft",
  "Google",
  "Netflix",
  "Gaming",
  "Bitcoin",
];

const Layout = ({ children }: ILayoutProps) => {

    

  return (
    <div className={styles.container}>
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
          <div className={styles.logoText}>
            <span>NEWS.CO</span>
          </div>
        </div>
      </nav>
      <div className={styles.categoryCarouselWrapper}>
        <CardSlider>
          {categories.map((category, i) => (
            <button className={styles.categories} key={i}>
              <span>{category}</span>
            </button>
          ))}
        </CardSlider>
      </div>
      {children}
    </div>
  );
};

export default Layout;
