import Head from "next/head";
import styles from "../styles/Home.module.css";

const handleClick = async (song, artist) => {
  // Call your backend to create the Checkout Session
  const response = await fetch(
    "https://couch.camp/api/pay/?name=example&nae=example" + amount,
    {
      method: "POST",
    }
  );
};

const getValue = (value) => () => {
  handleClick(value, artist);
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>School Playlist Wizard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ backgroundColor: "#43d478" }}>
        <code className={styles.code}>Student Council 2020/21</code>
        <h1 className={styles.title} style={{ fontSize: "3em" }}>
          Success, song added!
        </h1>
        <p style={{ fontSize: "1.5em" }}>
          Thank you so much for contributing, we truly appreciate it.
        </p>

        <a
          href="/"
          className={styles.card}
          style={{
            fontSize: "1.5em",
            background: "none",
            padding: "10px",
            color: "white",
            maxWidth: "200px",
          }}
        >
          ← Add more.
        </a>
        <p>
          Built by Sam Poder, please email{" "}
          <a href="mailto:23samuel.p@gwa.edu.sg">23samuel.p@gwa.edu.sg</a> for
          support. Open sourced <a href="https://github.com/sampoder/playlist-wizard">here</a>.
        </p>
      </main>
    </div>
  );
}
