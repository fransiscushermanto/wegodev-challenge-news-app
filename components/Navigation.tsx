import React from "react";
import { useRouter } from "next/router";
import { css, cx } from "@emotion/css";
import Link from "next/link";
import Image from "next/image";
import CardSlider from "./CardSlider";
import { useNav } from "./providers/NavProvider";

const styles = {
  header: css`
    position: sticky;
    top: 0;
    background: white;
    padding-bottom: 10px;
  `,
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
    width: "100%",
  }),
  categories: css`
    cursor: pointer;
    margin: 0 0.3125rem;
    padding: 0.5rem 0.625rem;
    transition-duration: 0.3s;

    border: none;
    border-radius: 12px;

    outline: none;

    &::nth-child(1) {
      margin-left: 0;
      margin-right: 0.3125rem;
    }

    &::last-child {
      margin-right: 0;
      margin-left: 0.3125rem;
    }
    &:hover {
      background-color: rgba(255, 69, 0, 0.8);
      color: #f8f8f8;
    }
    &:focus {
      background-color: #ff4500;
    }
  `,
  active: css`
    background-color: #ff4500;
    box-shadow: 0px 8px 24px rgba(37, 37, 39, 0.2);
    color: #f8f8f8;
  `,
  cardSlider: css`
    padding: 0.625rem 0.625rem;
    background-color: rgba(37, 37, 39, 0.03);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  `,
};

export const categories = [
  "Apple",
  "Fintech",
  "Kpop",
  "PlayStation",
  "Microsoft",
  "Google",
  "Netflix",
  "Gaming",
  "Bitcoin",
  "Cryptocurrency",
];

const Navigation = () => {
  const [active, setActive] = useNav();

  function handleActiveCategory(category: string) {
    setActive(category);
  }

  return (
    <header className={styles.header}>
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
        <CardSlider className={styles.cardSlider}>
          {categories.map((category, i) => (
            <button
              onClick={() => handleActiveCategory(category.toLowerCase())}
              className={cx(
                styles.categories,
                !active
                  ? category.toLowerCase() === "all" && styles.active
                  : String(active).toLowerCase() === category.toLowerCase() &&
                      styles.active,
              )}
              key={i}
            >
              <span>{category}</span>
            </button>
          ))}
        </CardSlider>
      </div>
    </header>
  );
};

export default Navigation;
