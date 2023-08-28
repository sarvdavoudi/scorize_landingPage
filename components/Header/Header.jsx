import React, { useState } from "react";
import styles from "./Header.module.css";
import logoImageEnglish from "../../public/picture/ScorizeLogo.png";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" border-b-2 border-primary-color rounded-2xl">
      <button className={`${styles.hamburger} ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className={styles.hamburgerline}></span>
        <span className={styles.hamburgerline}></span>
        <span className={styles.hamburgerline}></span>
      </button>

      <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
     
        <li className={`${styles.li} `}>
          <Image src={logoImageEnglish} className="w-24 h-10 "></Image>
        </li>
        <li className={`${styles.li} pr-3 border-r-2 h-8 border-transparent border-primary-color  `}>
          <a href="">رزرو مشاوره</a>
        </li>

        <li className={styles.li}>
          <a href="">خدمات ما</a>
        </li>

        <li className={styles.li}>
          <a href="">موفقیت ها</a>
        </li>

        <li className={styles.li}>
          <a href="">بلاگ</a>
        </li>

        <li className={styles.li}>
          <a href="">درباره ما</a>
        </li>
        <li className={styles.li}>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 30 30" height="30" width="30">
              <path
                stroke="#93215f"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M27.349 7.26a22.771 22.771 0 0 1 -1.589 6.471 3.88 3.88 0 0 1 -2.865 2.332c-1.326 0.259 -3.337 0.518 -6.065 0.518a37.949 37.949 0 0 1 -4.843 -0.294c-2.287 -0.294 -3.9 -2.165 -4.267 -4.441l-1.077 -6.655h18.732c1.143 0 2.082 0.93 1.974 2.069Z"
                stroke-width="1"
              ></path>
              <path
                stroke="#93215f"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M24.339 21.762H12.847a4.143 4.143 0 0 1 -4.089 -3.48l-1.98 -12.201a4.143 4.143 0 0 0 -4.089 -3.48H1.554"
                stroke-width="1"
              ></path>
              <path
                stroke="#93215f"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.573 26.398a2.32 2.32 0 1 0 0 -4.636 2.32 2.32 0 0 0 0 4.636Z"
                stroke-width="1"
              ></path>
              <path
                stroke="#93215f"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M24.339 26.398a2.32 2.32 0 1 0 0 -4.636 2.32 2.32 0 0 0 0 4.636Z"
                stroke-width="1"
              ></path>
            </svg>
          </a>
        </li>

        <li className={styles.li}>
          <button className="bg-primary-color text-tertiary-color rounded-xl pt-3 pb-3 pl-4 pr-4 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            ثبت نام / ورود
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
