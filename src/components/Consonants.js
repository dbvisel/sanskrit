import React from "react";
import {
  BigCharacter,
  ButtonListUl,
  ChoicesButtons,
} from "./../styledcomponents/LetterStyles";

const Consonants = ({ data, score, settings }) => {
  const allowedTypes = Object.keys(settings.consonantTypes).filter(
    (x) => settings.consonantTypes[x]
  );
  const allowedClasses = Object.keys(settings.consonantClasses).filter(
    (x) => settings.consonantClasses[x]
  );
  const allowedVoiced = Object.keys(settings.consonantVoiced).filter(
    (x) => settings.consonantVoiced[x]
  );
  const allowedAspirated = Object.keys(settings.consonantAspirated).filter(
    (x) => settings.consonantAspirated[x]
  );
  const characters = data.characters
    .filter((x) => allowedTypes.indexOf(x.type) > -1)
    .filter((x) => allowedClasses.indexOf(x.class) > -1)
    .filter((x) => allowedVoiced.indexOf(x.voiced) > -1)
    .filter(
      (x) => x.aspirated === null || allowedAspirated.indexOf(x.aspirated) > -1
    );

  const types = Array.from(new Set(characters.map((x) => x.type)));
  const classes = Array.from(new Set(characters.map((x) => x.class)));
  const voiced = Array.from(new Set(characters.map((x) => x.voiced)));
  const aspirated = Array.from(new Set(characters.map((x) => x.aspirated)));
  const englishLetters = characters.map((x) => x.en);
  const sanskritLetters = characters.map((x) => x.sa);
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
    sa: false,
  });

  const check = (x, key) => {
    const newCorrect = Object.assign({}, correctElements);
    newCorrect[key] = x === currentCharacter[key];
    setClicks(clicks + 1);
    setCorrectElements(newCorrect);
  };

  const ButtonList = ({ categoryData, categoryId }) =>
    categoryData.filter((x) => x !== null).length > 1 ? (
      <ButtonListUl category={categoryId}>
        {categoryData
          .filter((x) => x !== null)
          .map((x, index) => (
            <li
              className={
                correctElements[categoryId] &&
                currentCharacter[categoryId] === x
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
    ) : null;

  React.useEffect(() => {
    if (characters.indexOf(currentCharacter) < 0) {
      // if here, we need a new character!
      const oldCharacter = currentCharacter;
      let newCharacter = oldCharacter;
      do {
        newCharacter =
          characters[Math.floor(Math.random() * characters.length)];
      } while (oldCharacter === newCharacter);
      setCurrentCharacter(newCharacter);
      setClicks(0);
    }
  }, [currentCharacter, characters]);

  React.useEffect(() => {
    // console.log(correctElements);
    // console.log(currentCharacter);
    if (
      correctElements.en ||
      (correctElements.sa &&
        (!settings.useClassifiers ||
          (correctElements.type &&
            correctElements.class &&
            correctElements.voiced &&
            (correctElements.aspirated || !currentCharacter.aspirated))))
    ) {
      setCorrectElements({
        type: false,
        class: false,
        voiced: false,
        aspirated: false,
        en: false,
        sa: false,
      });
      score(
        `consonants_${data.characters.indexOf(currentCharacter)}`,
        clicks,
        settings.useClassifiers ? 5 : 1
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
    characters,
    data.characters,
    clicks,
    currentCharacter,
    score,
    settings.useClassifiers,
  ]);

  // console.log(settings);
  // if (JSON.stringify(settings) !== JSON.stringify(oldSettings)) {
  //   console.log("settings changed");
  //   setCharacters(refilter());
  //   setOldSettings(settings);
  //   console.log(characters);
  // }

  return characters.length ? (
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
            <ButtonList categoryData={types} categoryId={"type"} />
            <ButtonList categoryData={classes} categoryId={"class"} />
            <ButtonList categoryData={voiced} categoryId={"voiced"} />
            {currentCharacter.aspirated ? (
              <ButtonList categoryData={aspirated} categoryId={"aspirated"} />
            ) : null}
          </>
        ) : null}
      </ChoicesButtons>
    </>
  ) : null;
};

export default Consonants;
