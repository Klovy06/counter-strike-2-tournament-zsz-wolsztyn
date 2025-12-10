import styles from "./page.module.css";

export default function Home() {
  const channel = "zszwolsztyn2025";
  const parentDomain = "cs2zsz.klovy.org"; 
  const playerSrc = `https://player.twitch.tv/?channel=${channel}&parent=${parentDomain}&muted=true&autoplay=true`;
  const channelUrl = `https://twitch.tv/${channel}`;

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section id="transmisja" className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.player}>
              <iframe
                title="Twitch stream"
                src={playerSrc}
                allowFullScreen
                scrolling="no"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              <div className={styles.overlayLabel}>Counter-Strike 2 • LIVE</div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <span></span>
        </footer>
      </div>
    </div>
  );
}
