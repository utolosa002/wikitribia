import React from "react";
import GitHubButton from "react-github-btn";
import styles from "../styles/instructions.module.scss";
import Button from "./button";
import Score from "./score";

interface Props {
  highscore: number;
  start: () => void;
}

export default function Instructions(props: Props) {
  const { highscore, start } = props;

  return (
    <div className={styles.instructions}>
      <div className={styles.wrapper}>
        <h2>Jarri txartelak denbora lerroan orden egokian.</h2>
        {highscore !== 0 && (
          <div className={styles.highscoreWrapper}>
            <Score score={highscore} title="Serie onena" />
          </div>
        )}
        <Button onClick={start} text="Hasi jokoa" />
        <div className={styles.about}>
          <div>
            Datu guztiak hemendik: {" "}
            <a
              href="https://www.wikidata.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikidata
            </a>{" "}
            eta{" "}
            <a
              href="https://eu.wikipedia.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
            .
          </div>
          <div>
            Zalantzarik/iruzkinik? Jakinarazi iezaiguzu{" "}
            <a
              href="https://github.com/utolosa002/wikitribia/issues/"
              target="_blank"
              rel="noopener noreferrer"
            >
              kodea
            </a>
            .
          </div>
          <GitHubButton
            href="https://github.com/utolosa002/wikitribia"
            data-size="large"
            data-show-count="true"
            aria-label="Star tom-james-watson/wikitrivia on GitHub"
          >
            Izarra
          </GitHubButton>
        </div>
      </div>
    </div>
  );
}
