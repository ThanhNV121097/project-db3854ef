import styles from './HelloWorld.module.css';

export function HelloWorldPage() {
  return (
    <main className={styles.helloWorldShell} aria-labelledby="hello-world-title">
      <section className={styles.helloWorldCard}>
        <p className={styles.helloWorldEyebrow}>
          <span className={styles.helloWorldDot} aria-hidden="true" />
          Hello World
        </p>
        <h1 id="hello-world-title" className={styles.helloWorldTitle}>
          Hello, World!
        </h1>
      </section>
    </main>
  );
}
