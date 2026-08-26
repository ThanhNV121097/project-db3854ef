import styles from './HelloWorld.module.css';

export function HelloWorldPage() {
  return (
    <section className={styles.card}>
      <p className={styles.eyebrow} aria-hidden="true">
        <span className={styles.dot} aria-hidden="true" />
        Minimal static page
      </p>
      <h1 id="hello-world-title" className={styles.title}>
        Hello, World!
      </h1>
      <p className={styles.body}>
        One clean screen. No login. No database. No extra sections.
      </p>
    </section>
  );
}
