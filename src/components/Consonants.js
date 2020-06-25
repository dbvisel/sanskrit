import React from "react";
import {
  BigCharacter,
  ButtonListUl,
  ChoicesButtons,
} from "./../styledcomponents/LetterStyles";

const Consonants = ({ data, score }) => {
  const { characters } = data;
  const types = Array.from(new Set(characters.map((x) => x.type)));
  const classes = Array.from(new Set(characters.map((x) => x.class)));
  const voiced = Array.from(new Set(characters.map((x) => x.voiced)));
  const aspirated = Array.from(new Set(characters.map((x) => x.aspirated)));
  const englishLetters = characters.map((x) => x.en);
  const [clicks, setClicks] = React.useState(0);
  const [currentCharacter, setCurrentCharacter] = React.useState(
    characters[Math.floor(Math.random() * characters.length)]
  );
  const [correctElements, setCorrectElements] = React.useState({
    type: false,
    class: false,
    voiced: false,
    aspirated: false,
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
      {categoryData
        .filter((x) => x !== null)
        .map((x, index) => (
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
      correctElements.type &&
      correctElements.class &&
      correctElements.voiced &&
      (correctElements.aspirated || !currentCharacter.aspirated) &&
      correctElements.en
    ) {
      setCorrectElements({
        type: false,
        class: false,
        voiced: false,
        aspirated: false,
        en: false,
      });
      score(`consonants_${characters.indexOf(currentCharacter)}`, clicks);
      setCurrentCharacter(
        characters[Math.floor(Math.random() * characters.length)]
      );
      setClicks(0);
    }
  }, [correctElements, characters, clicks, currentCharacter, score]);

  return (
    <>
      <BigCharacter>{currentCharacter.sa}</BigCharacter>
      <ChoicesButtons>
        <ButtonList categoryData={types} categoryId={"type"} />
        <ButtonList categoryData={classes} categoryId={"class"} />
        <ButtonList categoryData={voiced} categoryId={"voiced"} />
        {currentCharacter.aspirated ? (
          <ButtonList categoryData={aspirated} categoryId={"aspirated"} />
        ) : null}
        <ButtonList categoryData={englishLetters} categoryId={"en"} />
      </ChoicesButtons>
    </>
  );
};

export default Consonants;
