"use client";

import { useEffect } from 'react';
import styles from './HelloWorld.module.css';

export function HelloWorldPage() {
  useEffect(() => {
    const previous = document.body.style.backgroundColor;
    document.body.style.backgroundColor = 'var(--color-bg)';

    return () => {
      document.body.style.backgroundColor = previous;
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
