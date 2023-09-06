import Head from "next/head";
import styles from "../styles/index.module.css";
import Image from "next/image";
import banner_image from "../public/picture/banner.png";
import SearchBox from "../components/SearchBox/SearchBox";
import Layout from "../container/Layout";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scorize</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          <div className={styles.mainDiv}>
            <div className="content">
              <PrimaryButton className=" bg-primary-color text-tertiary-color rounded-xl pt-3 pb-3 pl-4 pr-4 flex mt-32 !important">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-send"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                مهاجرت تضمینی
              </PrimaryButton>
              <h1 className="mb-7">
                مهاجرت تضمینی به خارج از کشور با{" "}
                <button className=" text-primary-color border border-primary-color rounded-2xl pl-2 pr-2 ">اسکورایز</button>
              </h1>
              <SearchBox />
            </div>
            <div className="image_banner">
              {/* w-full ===> width:100% */}
              <Image src={banner_image} className="w-full"></Image>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
