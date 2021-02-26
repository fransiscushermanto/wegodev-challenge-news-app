import React, { useState, useRef } from "react";

import { css } from "@emotion/css";

interface ICardSliderProps {
  children: React.ReactNode;
}

const styles = {
  cardSlider: css`
    padding: 0.625rem 0.625rem;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    background-color: rgba(37, 37, 39, 0.03);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 100%;
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: none !important;
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      width: 3px !important;
      height: 0px !important;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    @media (max-width: 480px) {
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }
  `,
};

const CardSlider = ({ children }: ICardSliderProps) => {
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const slider = useRef(null);

  const onMouseDown = (e) => {
    setIsDown(true);
    slider.current.classList.add("active");
    setStartX(e.pageX - slider.current.offsetLeft);
    setScrollLeft(slider.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDown(false);
    slider.current.classList.remove("active");
  };

  const onMouseUp = () => {
    setIsDown(false);
    slider.current.classList.remove("active");
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;
    const walk = (x - startX) * 3;
    slider.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={styles.cardSlider}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      ref={slider}
    >
      {children}
    </div>
  );
};

export default CardSlider;
