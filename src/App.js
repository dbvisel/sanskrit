import React from "react";
import TopMenu from "./components/TopMenu";
import Vowels from "./components/Vowels";
import Consonants from "./components/Consonants";
import AdditionalCharacters from "./components/AdditionalCharacters";
import SpecialConjuncts from "./components/SpecialConjuncts";
import Scores from "./components/Scores";
import Settings from "./components/Settings";
import data from "./assets/data.js";
import useLocalStorage from "./hooks/useLocalStorage";
import { Wrapper } from "./styledcomponents/AppStyles";

const dataIds = Object.keys(data);
const dataTitles = dataIds.map((x) => data[x].title);

const initialSettings = {
  useClassifiers: false,
  useUncommonCharacters: false,
};

const makeIds = () => {
  const idList = [];
  for (let i = 0; i < dataIds.length; i++) {
    for (let j = 0; j < data[dataIds[i]].characters.length; j++) {
      idList.push({
        id: `${dataIds[i]}_${j}`,
        repetitions: 0,
        clicks: 0,
        idealClicks: 0,
      });
    }
  }
  return idList;
};

function App() {
  const [selected, setSelected] = React.useState(dataIds[0]);
  const [score, setScore] = useLocalStorage("sanskritScores", makeIds());
  const [settings, setSettings] = useLocalStorage(
    "sanskritSettings",
    initialSettings
  );

  const calculateScore = (id, clicks, idealClicks) => {
    const thisId = score.filter((x) => x.id === id)[0];
    thisId.repetitions++;
    thisId.clicks += clicks;
    thisId.idealClicks += idealClicks;
    const newScores = score.slice();
    setScore(newScores);
  };

  // React.useEffect(() => {
  //   console.log(score);
  // }, [score]);

  return (
    <Wrapper>
      <TopMenu
        ids={dataIds}
        titles={dataTitles}
        selected={selected}
        setSelected={(e) => setSelected(e)}
      />
      {selected === "vowels" ? (
        <Vowels data={data.vowels} score={calculateScore} settings={settings} />
      ) : selected === "consonants" ? (
        <Consonants
          data={data.consonants}
          score={calculateScore}
          settings={settings}
        />
      ) : selected === "additionalCharacters" ? (
        <AdditionalCharacters
          data={data.additionalCharacters}
          score={calculateScore}
          settings={settings}
        />
      ) : selected === "specialConjuncts" ? (
        <SpecialConjuncts
          data={data.specialConjuncts}
          score={calculateScore}
          settings={settings}
        />
      ) : selected === "scores" ? (
        <Scores
          data={data}
          score={score}
          resetScores={() => {
            setScore(makeIds());
          }}
        />
      ) : selected === "settings" ? (
        <Settings
          settings={settings}
          outSettings={(x) => {
            setSettings(x);
          }}
        />
      ) : null}
    </Wrapper>
  );
}

export default App;
