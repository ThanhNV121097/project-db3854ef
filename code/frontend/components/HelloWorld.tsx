import styles from './HelloWorld.module.css';

export function HelloWorldPage() {
  return (
    <main className={styles.helloWorldShell} aria-labelledby="hello-world-title">
      <h1 id="hello-world-title" className={styles.helloWorldTitle}>
        Hello, World!
      </h1>
    </main>
  );
}
