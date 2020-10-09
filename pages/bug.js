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

      <main className={styles.main}>
        <code className={styles.code}>Student Council 2020/21</code>
        <h1 className={styles.title} style={{ fontSize: "3em" }}>
          Oh no. Bugs.
        </h1>
        <p style={{ fontSize: "1.5em" }}>
          Something went wrong, please try again. If this happens multiple times please contact the <a href="mailto:23samuel.p@gwa.edu.sg">developer</a>.
        </p>
        <form action="/api/add">
          <input
            type="text"
            className={styles.card}
            style={{
              minWidth: "100px",
              fontSize: "1.5em",
              background: "none",
              padding: "10px",
              color: "white",
            }}
            id="song"
            name="song"
            required
            placeholder="Song name"
          />
          <input
            type="text"
            className={styles.card}
            style={{
              minWidth: "100px",
              fontSize: "1.5em",
              background: "none",
              padding: "10px",
              color: "white",
            }}
            id="artist"
            name="artist"
            placeholder="Artist"
          />
          <input
            className={styles.card}
            style={{
              fontSize: "1.5em",
              background: "none",
              padding: "10px",
              color: "white",
            }}
            type="submit"
            value="→"
          />
        </form>
        <p>
          Built by Sam Poder, please email{" "}
          <a href="mailto:23samuel.p@gwa.edu.sg">23samuel.p@gwa.edu.sg</a> for
          support. Open sourced <a href="https://github.com/sampoder/playlist-wizard">here</a>.
        </p>
      </main>
    </div>
  );
}
