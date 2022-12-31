import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./header.css";
import Image from "next/image";
import logo from "../photos/rbk77_logo.png";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";

function Header() {
  const [click, setClick] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (window.pageYOffset > 0) setHasScrolled(true);
      else setHasScrolled(false);
      if (click) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener("wheel", handleScroll, {
      passive: false,
    });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [click]);

  const handleClick = () => setClick(!click);

  const nav = styles.nav({
    scrolling: hasScrolled,
    hasClicked: click,
  });
  const navMenu = styles.navMenu({
    // scrolling: hasScrolled,
    hasClicked: click,
  });
  const navItem = styles.navItem();
  const navLink = styles.navLink();
  const mobileIcon = styles.mobileIcon();
  const headerButtonContainer = styles.headerButtonContainer();

  return (
    <nav className={nav}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src={logo} alt="logo" width={150} objectFit="cover"></Image>
          </Link>
          <div className={mobileIcon} onClick={handleClick}>
            {click ? <FaTimes color="white" /> : <RiMenu3Line color="white" />}
          </div>
        </div>
        <ul className={navMenu}>
          <li className={navItem}>
            <Link className={navLink} href="#">
              Link1
            </Link>
          </li>
          <li className={navItem}>
            <Link className={navLink} href="#">
              Link2
            </Link>
          </li>
          <li className={navItem}>
            <Link className={navLink} href="#">
              Link3
            </Link>
          </li>
          <div className={headerButtonContainer}>
            <button className={styles.headerButton}>Tilmeld</button>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
