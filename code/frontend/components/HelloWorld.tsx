"use client";

import { useEffect } from 'react';
import styles from './HelloWorld.module.css';

export function HelloWorldPage() {
  useEffect(() => {
    document.body.dataset.page = 'hello-world';

    return () => {
      delete document.body.dataset.page;
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
