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
  const sanskritLetters = characters.map((x) => x.sa);
  const [clicks, setClicks] = React.useState(0);
  const [currentCharacter, setCurrentCharacter] = React.useState(
    characters[Math.floor(Math.random() * characters.length)]
  );
  const [correctElements, setCorrectElements] = React.useState({
    length: false,
    complexity: false,
    sa: false,
    en: false,
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
    if (
      correctElements.en ||
      (correctElements.sa &&
        (!settings.useClassifiers ||
          (correctElements.length && correctElements.complexity)))
    ) {
      setCorrectElements({
        length: false,
        complexity: false,
        en: false,
        sa: false,
      });
      score(
        `vowels_${data.characters.indexOf(currentCharacter)}`,
        clicks,
        settings.useClassifiers ? 3 : 1
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
      <BigCharacter>
        {currentCharacter[settings.enSa ? "sa" : "en"]}
      </BigCharacter>
      <ChoicesButtons>
        {settings.enSa ? (
          <ButtonList categoryData={englishLetters} categoryId={"en"} />
        ) : (
          <ButtonList categoryData={sanskritLetters} categoryId={"sa"} />
        )}
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
