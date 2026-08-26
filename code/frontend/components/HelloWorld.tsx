"use client";

import { useEffect } from 'react';
import styles from './HelloWorld.module.css';

export function HelloWorldPage() {
  useEffect(() => {
    const { body } = document;
    const previousBackgroundColor = body.style.backgroundColor;
    body.style.backgroundColor = 'var(--color-bg)';

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
