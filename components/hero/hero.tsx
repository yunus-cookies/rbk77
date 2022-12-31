import Image from "next/image";
import React from "react";
import desktoprb from "../photos/boxing_hero3.jpg";
import mobilerb from "../photos/mobilerb.jpg";
import styles from "./hero.css";

function Hero() {
  return (
    <div className={styles.parentHero}>
      <Image
        layout="fill"
        alt="water_portrait"
        src={desktoprb} //image saved in public/home
        objectFit="cover"
        objectPosition="75% center"
      />
    </div>
  );
}

export default Hero;
