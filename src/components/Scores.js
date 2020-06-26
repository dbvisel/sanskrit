import React from "react";
import { ScoreDiv, ScoreSection } from "./../styledcomponents/ScoreStyles";

const accuracy = (idealClicks, clicks) => {
  const percentage = parseInt((100 * idealClicks) / clicks, 10);
  return percentage ? percentage : 0;
};

const Scores = ({ data, score, resetScores }) => {
  const ScoreBlock = ({ id }) => {
    const scoreData = score
      .filter((x) => x.id.substring(0, id.length) === id)
      .map((x) => {
        return {
          order: parseInt(x.id.substring(id.length + 1), 10),
          repetitions: x.repetitions,
          accuracy: accuracy(x.idealClicks, x.clicks),
        };
      })
      .sort((a, b) => {
        if (a.accuracy > b.accuracy) return -1;
        if (b.accuracy > a.accuracy) return 1;
        return 0;
      });
    return (
      <ScoreDiv>
        <h2>{data[id].title}</h2>
        <ul>
          <li>
            <span>
              <strong>Sanskrit</strong>
            </span>
            <span>
              <strong>English</strong>
            </span>
            <span>
              <strong>Repetitions</strong>
            </span>
            <span>
              <strong>Accuracy</strong>
            </span>
          </li>
          {scoreData.map((letter, index) => (
            <li key={index}>
              <span>{data[id].characters[letter.order].sa}</span>
              <span>{data[id].characters[letter.order].en}</span>
              <span>{letter.repetitions}</span>
              <span>
                {letter.accuracy ? String(letter.accuracy) + "%" : "—"}
              </span>
            </li>
          ))}
        </ul>
      </ScoreDiv>
    );
  };

  return (
    <ScoreSection>
      <ScoreBlock id={"vowels"} />
      <ScoreBlock id={"consonants"} />
      <ScoreBlock id={"specialConjuncts"} />
      <a
        href="/#"
        onClick={(e) => {
          e.preventDefault();
          resetScores();
        }}
      >
        Reset scores
      </a>
    </ScoreSection>
  );
};

export default Scores;
