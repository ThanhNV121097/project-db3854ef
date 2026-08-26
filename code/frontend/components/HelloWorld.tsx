import styles from './HelloWorld.module.css';

export function HelloWorldPage() {
  return (
    <main className={styles.helloWorldShell} aria-labelledby="hello-world-title">
      <section className={styles.helloWorldCard}>
        <p className={styles.helloWorldEyebrow}>
          <span className={styles.helloWorldDot} aria-hidden="true" />
          Minimal static page
        </p>
        <h1 id="hello-world-title" className={styles.helloWorldTitle}>
          Hello, World!
        </h1>
        <p className={styles.helloWorldBody}>
          One clean screen. No login. No database. No extra sections.
        </p>
        <div className={styles.helloWorldFooter} aria-hidden="true">
          <span className={styles.helloWorldPill}>Responsive</span>
          <span className={styles.helloWorldPill}>Static</span>
          <span className={styles.helloWorldPill}>Zero motion</span>
        </div>
      </section>
    </main>
  );
}
