"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    "Welcome Dev": "basic-chat",
    "Code Check": "file-search",
  };

  return (
    <main className={styles.main}>
      <div className={styles.logoContainer}>
        <Image
          src="/solana-logo.png"
          alt="Solana Logo"
          width={100}
          height={100}
          priority
          onError={(e) => {
            e.currentTarget.src = "/placeholder-logo.png";
          }}
        />
      </div>
      <h1 className={styles.title}>
        Explore Solana Rust Smart Contract Developer Tool
      </h1>
      <div className={styles.grid}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.card} href={`/examples/${url}`}>
            <h2>{name}</h2>
            <p>
              {name === "Welcome Dev"
                ? "Do some code nerd"
                : "Upload and analyze your Solana code"}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
