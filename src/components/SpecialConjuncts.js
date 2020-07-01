import React from "react";
import {
  BigCharacter,
  ButtonListUl,
  ChoicesButtons,
} from "./../styledcomponents/LetterStyles";

const SpecialConjuncts = ({ data, score, settings }) => {
  const characters = data.characters;
  const englishLetters = characters.map((x) => x.en);
  const sanskritLetters = characters.map((x) => x.sa);
  const [clicks, setClicks] = React.useState(0);
  const [currentCharacter, setCurrentCharacter] = React.useState(
    characters[Math.floor(Math.random() * characters.length)]
  );
  const [correctElements, setCorrectElements] = React.useState({
    en: false,
    sa: false,
  });

  const check = (x, key) => {
    const newCorrect = Object.assign({}, correctElements);
    newCorrect[key] = x === currentCharacter[key];
    setClicks(clicks + 1);
    setCorrectElements(newCorrect);
  };

  const ButtonList = ({ categoryData, categoryId }) => (
    <ButtonListUl category={categoryId}>
      {categoryData.map((x, index) => (
        <li
          className={
            correctElements[categoryId] && currentCharacter[categoryId] === x
              ? "on"
              : ""
          }
          key={index}
          id={x}
          onClick={() => {
            check(x, categoryId);
          }}
        >
          {x}
        </li>
      ))}
    </ButtonListUl>
  );

  React.useEffect(() => {
    // console.log(correctElements);
    // console.log(currentCharacter);
    if (correctElements.en || correctElements.sa) {
      setCorrectElements({ en: false, sa: false });
      score(
        `specialConjuncts_${characters.indexOf(currentCharacter)}`,
        clicks,
        1
      );
      const oldCharacter = currentCharacter;
      let newCharacter = oldCharacter;
      do {
        newCharacter =
          characters[Math.floor(Math.random() * characters.length)];
      } while (oldCharacter === newCharacter);
      setCurrentCharacter(newCharacter);
      setClicks(0);
    }
  }, [correctElements, characters, clicks, currentCharacter, score]);

  return (
    <>
      <BigCharacter>
        {currentCharacter[settings.enSa ? "sa" : "en"]}
      </BigCharacter>
      <ChoicesButtons>
        {settings.enSa ? (
          <ButtonList categoryData={englishLetters} categoryId={"en"} />
        ) : (
          <ButtonList categoryData={sanskritLetters} categoryId={"sa"} />
        )}
      </ChoicesButtons>
    </>
  );
};

export default SpecialConjuncts;
