import React from "react";
import {
  BigCharacter,
  ButtonListUl,
  ChoicesButtons,
} from "./../styledcomponents/LetterStyles";

const Vowels = ({ data, score, settings }) => {
  const characters = settings.useUncommonCharacters
    ? data.characters
    : data.characters.filter((x) => !x.uncommon);
  const lengths = Array.from(new Set(characters.map((x) => x.length)));
  const complexities = Array.from(new Set(characters.map((x) => x.complexity)));
  const englishLetters = characters.map((x) => x.en);
  const [clicks, setClicks] = React.useState(0);
  const [currentCharacter, setCurrentCharacter] = React.useState(
    characters[Math.floor(Math.random() * characters.length)]
  );
  const [correctElements, setCorrectElements] = React.useState({
    length: false,
    complexity: false,
    en: false,
  });

  const check = (x, key) => {
    const newCorrect = Object.assign({}, correctElements);
    newCorrect[key] = x === currentCharacter[key];
    setClicks(clicks + 1);
    setCorrectElements(newCorrect);
  };

  const ButtonList = ({ categoryData, categoryId }) => (
    <ButtonListUl>
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
    if (
      correctElements.en &&
      (!settings.useClassifiers ||
        (correctElements.length && correctElements.complexity))
    ) {
      setCorrectElements({ length: false, complexity: false, en: false });
      score(
        `vowels_${data.characters.indexOf(currentCharacter)}`,
        clicks,
        settings.useClassifiers ? 3 : 1
      );
      setCurrentCharacter(
        characters[Math.floor(Math.random() * characters.length)]
      );
      setClicks(0);
    }
  }, [
    correctElements,
    data.characters,
    characters,
    clicks,
    currentCharacter,
    score,
    settings.useClassifiers,
  ]);

  return (
    <>
      <BigCharacter>{currentCharacter.sa}</BigCharacter>
      <ChoicesButtons>
        <ButtonList categoryData={englishLetters} categoryId={"en"} />
        {settings.useClassifiers ? (
          <>
            <ButtonList categoryData={lengths} categoryId={"length"} />
            <ButtonList categoryData={complexities} categoryId={"complexity"} />
          </>
        ) : null}
      </ChoicesButtons>
    </>
  );
};

export default Vowels;
