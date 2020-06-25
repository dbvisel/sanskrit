import React from "react";
import { ScoreDiv, ScoreSection } from "./../styledcomponents/ScoreStyles";

const Scores = ({ data, score, resetScores }) => {
  const ScoreBlock = ({ id }) => {
    const scoreData = score
      .filter((x) => x.id.substring(0, id.length) === id)
      .sort((a, b) => {
        if (a.times > b.times) return -1;
        if (b.times > a.times) return 1;
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
              <strong>Times</strong>
            </span>
            <span>
              <strong>Clicks</strong>
            </span>
          </li>
          {scoreData.map((letter, index) => (
            <li key={index}>
              <span>
                {
                  data[id].characters[
                    parseInt(letter.id.substring(id.length + 1), 10)
                  ].sa
                }
              </span>
              <span>
                {
                  data[id].characters[
                    parseInt(letter.id.substring(id.length + 1), 10)
                  ].en
                }
              </span>
              <span>{letter.times}</span>
              <span>{letter.clicks}</span>
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
