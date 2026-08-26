import styles from './HelloWorld.module.css';

export function HelloWorldPage() {
  return (
    <section className={styles.helloWorldCard}>
      <p className={styles.helloWorldEyebrow} aria-hidden="true">
        <span className={styles.helloWorldDot} aria-hidden="true" />
        Minimal static page
      </p>
      <h1 id="hello-world-title" className={styles.helloWorldTitle}>
        Hello, World!
      </h1>
      <p className={styles.helloWorldBody}>
        One clean screen. No login. No database. No extra sections.
      </p>
    </section>
  );
}
