"use client";

import Head from "next/head";
import { useRef, useEffect } from "react";

import { intiParticle } from "@/helpers/bubbles";

const BubbleEffect = () => {
  const containerEl = useRef(null);
  useEffect(() => {
    if (containerEl.current) {
      console.log("sdf");
      intiParticle(containerEl.current);
    }
  }, [containerEl]);

  return (
    <>
      <Head>
        <script src="/sketch.js" />
      </Head>
      <div id="bubble-container" ref={containerEl} />
    </>
  );
};

export default BubbleEffect;
