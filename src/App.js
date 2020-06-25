import React from "react";
import TopMenu from "./components/TopMenu";
import Vowels from "./components/Vowels";
import Consonants from "./components/Consonants";
import Scores from "./components/Scores";
import data from "./assets/data.js";
import { Wrapper } from "./styledcomponents/AppStyles";

const dataIds = Object.keys(data);
const dataTitles = dataIds.map((x) => data[x].title);

const makeIds = () => {
  const idList = [];
  for (let i = 0; i < dataIds.length; i++) {
    for (let j = 0; j < data[dataIds[i]].characters.length; j++) {
      idList.push({ id: `${dataIds[i]}_${j}`, times: 0, clicks: 0 });
    }
  }
  return idList;
};

function App() {
  const [selected, setSelected] = React.useState(dataIds[0]);
  const [score, setScore] = React.useState(makeIds());

  const calculateScore = (id, clicks) => {
    const thisId = score.filter((x) => x.id === id)[0];
    thisId.times++;
    thisId.clicks += clicks;
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
        <Vowels data={data.vowels} score={calculateScore} />
      ) : selected === "consonants" ? (
        <Consonants data={data.consonants} score={calculateScore} />
      ) : selected === "scores" ? (
        <Scores
          data={data}
          score={score}
          resetScores={() => {
            setScore(makeIds());
          }}
        />
      ) : null}
    </Wrapper>
  );
}

export default App;
