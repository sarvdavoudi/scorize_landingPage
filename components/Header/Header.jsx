"use client";
import styles from "./Header.module.css";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";
import logoImageEnglish from "../../public/picture/ScorizeLogo.png";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Header = () => {
  return (
    <Popover className="container mx-auto flex items-center  px-6 py-2 border-b-2 border-primary-color rounded-2xl">
      {/* logo */}
      <Image src={logoImageEnglish} className="w-28 h-12"></Image>

      {/* menu */}
      <div className="grow ">
        <div className="hidden sm:flex  justify-start gap-2 md:gap-8 ">
          <Link href="/" className={`${styles.headerItem}   border-r-2  border-primary-color`}>
            رزرو مشاوره
          </Link>
          <Link href="/" className={styles.headerItem}>
            خدمات ما
          </Link>
          <Link href="/" className={styles.headerItem}>
            موفقیت ها
          </Link>
          <Link href="/" className={styles.headerItem}>
            بلاگ
          </Link>
          <Link href="/" className={styles.headerItem}>
            درباره ما
          </Link>
        </div>
      </div>

      {/* shopping svg */}
      <div className="hidden sm:block ml-5">
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
      </div>

      {/* signIn button */}
      <div className="hidden sm:block">
        <PrimaryButton>
          {" "}
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
        </PrimaryButton>
      </div>

      {/* hamburger icon */}
      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset  ">
          <Bars3Icon className="w-6 h-6" aria-hidden="true" />
        </Popover.Button>
      </div>

      {/* hamburger menu */}
      <Popover.Panel className="absolute top-0 inset-x-0 p-2  transform origin-top-right transition md:hidden ">
        <div className="rounded-lg  bg-tertiary-color shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              {/* logo */}
              <Image src={logoImageEnglish} className="w-28 h-12"></Image>

              {/* close icon */}
              <div className="-mr-2">
                <Popover.Button className="bg-tertiary-color rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-secondary-color focus:outline-none focus:ring-2 focus:ring-inset">
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>

            {/* hamburger menu items */}
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link href="/" className={styles.hamburgerMenueItem}>
                  رزرو مشاوره
                </Link>
                <Link href="/" className={styles.hamburgerMenueItem}>
                  خدمات ما
                </Link>
                <Link href="/" className={styles.hamburgerMenueItem}>
                  موفقیت ها
                </Link>
                <Link href="/" className={styles.hamburgerMenueItem}>
                  بلاگ
                </Link>
                <Link href="/" className={styles.hamburgerMenueItem}>
                  درباره ما
                </Link>
              </nav>
            </div>
            {/* button and svg section */}
            <div className="mt-6 flex flex-col items-center gap-2">
              {/* shopping svg */}
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
              <PrimaryButton>
                {" "}
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
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Popover.Panel>

   
    </Popover>
  );
};

export default Header;
