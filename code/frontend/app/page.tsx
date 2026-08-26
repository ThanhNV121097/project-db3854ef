export default function Home() {
  return (
    <main className="page-shell" aria-labelledby="hello-world-title">
      <section className="helloWorldCard">
        <p className="helloWorldEyebrow" aria-hidden="true">
          <span className="helloWorldDot" aria-hidden="true" />
          Minimal static page
        </p>
        <h1 id="hello-world-title" className="helloWorldTitle">
          Hello, World!
        </h1>
        <p className="helloWorldBody">
          One clean screen. No login. No database. No extra sections.
        </p>
      </section>
    </main>
  );
}
