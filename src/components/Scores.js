import React from "react";
import { ScoreDiv } from "./../styledcomponents/ScoreStyles";

const Scores = ({ data, score }) => {
  const vowels = score
    .filter((x) => x.id.substring(0, 6) === "vowels")
    .sort((a, b) => {
      if (a.times > b.times) return -1;
      if (b.times > a.times) return 1;
      return 0;
    });
  console.log(data, vowels);
  return (
    <ScoreDiv>
      <h2>Vowels</h2>
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
        {vowels.map((vowel, index) => (
          <li key={index}>
            <span>
              {data.vowels.characters[parseInt(vowel.id.substring(7), 10)].sa}
            </span>
            <span>
              {data.vowels.characters[parseInt(vowel.id.substring(7), 10)].en}
            </span>
            <span>{vowel.times}</span>
            <span>{vowel.clicks}</span>
          </li>
        ))}
      </ul>
    </ScoreDiv>
  );
};

export default Scores;
