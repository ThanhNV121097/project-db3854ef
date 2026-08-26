import { HelloWorldPage } from '../components/HelloWorld';

export default function Home() {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          background-color: var(--color-bg) !important;
        }
      `}</style>
      <HelloWorldPage />
    </>
  );
}
