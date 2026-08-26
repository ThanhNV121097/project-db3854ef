"use client";

import { useLayoutEffect } from 'react';
import styles from './HelloWorld.module.css';

export function HelloWorldPage() {
  useLayoutEffect(() => {
    const { body } = document;
    const previousBackgroundColor = body.style.backgroundColor;
    body.style.backgroundColor = '#f8fafc';

    return () => {
      body.style.backgroundColor = previousBackgroundColor;
    };
  }, []);

  return (
    <main className={styles.helloWorldShell} aria-labelledby="hello-world-title">
      <h1 id="hello-world-title" className={styles.helloWorldTitle}>
        Hello, World!
      </h1>
    </main>
  );
}
