import { HelloWorldPage } from '../components/HelloWorld';

export default function Home() {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: var(--color-bg);
        }
      `}</style>
      <HelloWorldPage />
    </>
  );
}
