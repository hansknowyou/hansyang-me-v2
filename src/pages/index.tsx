import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";
import dynamic from "next/dynamic";
import BubbleEffect from "@/components/BubbleEffect";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hans Yang - IT Director / Senior Full Stack Engineer</title>
        <meta name="description" content="Never Settle" />
      </Head>
      <main className="relative w-screen h-screen">
        <BubbleEffect />
        <div className="home-page absolute">
          {/* <div className="tegline text-gray-700 text-1xl">
            <code>Hi, my name is</code>
          </div> */}

          <div className="name text-4xl">
            <code>
              <strong>Hans Yang</strong>
            </code>
          </div>

          <div className="description text-gray-700 text-1xl">
            <code>
              <strong>IT Director</strong>
              <span className="blinking-cursor">|</span>
            </code>
          </div>

          <div className="contact">
            <a
              className="text-gray-500"
              href="mailto:hans.yang.toronto@gmail.com"
            >
              hans.yang.toronto@gmail.com
            </a>
            <br />
            <a className="text-gray-500" href="tel:1-709-697-5510">
              1-709-697-5510
            </a>
            <br />
            <a
              className="text-blue-500 mr-4"
              href="https://www.linkedin.com/in/hansyang1990/"
              target="_blank"
            >
              LinkedIn
            </a>
            <Link
              className="text-red-500"
              href="/Resume-IT Lead-Songhua Yang.pdf"
              target="_blank"
            >
              Resume.pdf
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
