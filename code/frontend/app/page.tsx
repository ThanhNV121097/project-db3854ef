import styles from '../components/HelloWorld.module.css';
import { HelloWorldPage } from '../components/HelloWorld';

export default function Home() {
  return (
    <main className={styles.helloWorldShell}>
      <HelloWorldPage />
    </main>
  );
}
