import React from "react";
import Vowels from "./components/Vowels";
import Consonants from "./components/Consonants";
import AdditionalCharacters from "./components/AdditionalCharacters";
import SpecialConjuncts from "./components/SpecialConjuncts";
import Scores from "./components/Scores";
import Settings from "./components/Settings";
import SideMenu from "./components/SideMenu";
import data from "./assets/data.js";
import useLocalStorage from "./hooks/useLocalStorage";
import {
  Wrapper,
  OuterWrapper,
  TopMenuNav,
} from "./styledcomponents/AppStyles";

const dataIds = Object.keys(data);
const dataTitles = dataIds.map((x) => data[x].title);
const specialIds = ["settings", "scores"];
const specialTitles = ["Settings", "Scores"];

const initialSettings = {
  useClassifiers: false,
  useUncommonCharacters: false,
  consonantTypes: { nasal: true, stop: true, semivowel: true, sibilant: true },
  consonantClasses: {
    gutteral: true,
    palatal: true,
    retroflex: true,
    dental: true,
    labial: true,
  },
  consonantVoiced: { voiced: true, unvoiced: true },
  consonantAspirated: { aspirated: true, unaspirated: true },
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
  const [modalMenuOpen, setModalMenuOpen] = React.useState(false);
  const [score, setScore] = useLocalStorage("sanskritScores", makeIds());
  const [settings, setSettings] = useLocalStorage(
    "sanskritSettings",
    initialSettings
  );

  const calculateScore = (id, clicks, idealClicks) => {
    // console.log(id);
    // console.log(
    //   data[id.split("_")[0]].characters[parseInt(id.split("_")[1], 10)]
    // );
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
    <OuterWrapper className={modalMenuOpen ? "on" : ""}>
      <Wrapper>
        <TopMenuNav>
          <span>
            {dataTitles[dataIds.indexOf(selected)] ||
              specialTitles[specialIds.indexOf(selected)]}
          </span>
          <a
            href="/#"
            onClick={() => {
              setModalMenuOpen(!modalMenuOpen);
            }}
          >
            {modalMenuOpen ? "✕" : "☰"}
          </a>
        </TopMenuNav>
        {selected === "vowels" ? (
          <Vowels
            data={data.vowels}
            score={calculateScore}
            settings={settings}
          />
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
      <SideMenu
        ids={dataIds}
        titles={dataTitles}
        selected={selected}
        setSelected={(e) => setSelected(e)}
        closeMenu={() => {
          setModalMenuOpen(false);
        }}
        settings={settings}
        outSettings={(x) => {
          setSettings(x);
        }}
      />
    </OuterWrapper>
  );
}

export default App;
