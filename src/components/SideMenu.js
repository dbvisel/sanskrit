import React from "react";
import { ModalMenu, SettingDiv } from "./../styledcomponents/MenuStyles.js";
import makeChangeSettings from "./../modules/changeSettings";

const SideMenu = ({
  ids,
  titles,
  selected,
  setSelected,
  closeMenu,
  settings,
  outSettings,
}) => {
  const changeSettings = makeChangeSettings(settings);

  const CheckboxList = ({ classification, list }) => {
    return (
      <>
        {list.map((x, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={settings[classification][x.id]}
              onChange={() => {
                outSettings(changeSettings(classification, x.id));
              }}
            ></input>
            {x.name}
          </label>
        ))}
      </>
    );
  };

  const menuSettings = [
    {
      id: "vowels",
      setting: (
        <SettingDiv>
          <p>
            <label>
              <input
                type="checkbox"
                checked={settings.useClassifiers}
                onChange={() => {
                  outSettings(changeSettings("useClassifiers"));
                }}
              ></input>{" "}
              Use classifiers
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                checked={settings.useUncommonCharacters}
                onChange={() => {
                  outSettings(changeSettings("useUncommonCharacters"));
                }}
              ></input>
              Include uncommon characters
            </label>
          </p>
        </SettingDiv>
      ),
    },
    {
      id: "consonants",
      setting: (
        <SettingDiv>
          <p>
            <label>
              <input
                type="checkbox"
                checked={settings.useClassifiers}
                onChange={() => {
                  outSettings(changeSettings("useClassifiers"));
                }}
              ></input>{" "}
              Use classifiers
            </label>
          </p>
          <p>
            <label>
              <strong>Include by type:</strong>
            </label>
            <CheckboxList
              classification={"consonantTypes"}
              list={[
                { id: "stop", name: "stops" },
                { id: "nasal", name: "nasals" },
                { id: "semivowel", name: "semivowels" },
                { id: "sibilant", name: "sibilants" },
              ]}
            />
          </p>
          <p>
            <label>
              <strong>Include by class:</strong>
            </label>
            <CheckboxList
              classification={"consonantClasses"}
              list={[
                { id: "gutteral", name: "gutterals" },
                { id: "palatal", name: "palatals" },
                { id: "retroflex", name: "retroflexes" },
                { id: "dental", name: "dentals" },
                { id: "labial", name: "labials" },
              ]}
            />
          </p>
          <p>
            <label>
              <strong>Include by voice:</strong>
            </label>
            <CheckboxList
              classification={"consonantVoiced"}
              list={[
                { id: "voiced", name: "voiced" },
                { id: "unvoiced", name: "unvoiced" },
              ]}
            />
          </p>
          <p>
            <label>
              <strong>Include by aspiration:</strong>
            </label>
            <CheckboxList
              classification={"consonantAspirated"}
              list={[
                { id: "aspirated", name: "aspirated" },
                { id: "unaspirated", name: "unaspirated" },
              ]}
            />
          </p>
        </SettingDiv>
      ),
    },
  ];
  return (
    <ModalMenu>
      <ul>
        {ids.map((x, index) => (
          <li key={index}>
            <a
              href={`/#${x}`}
              id={x}
              className={x === selected ? "on" : ""}
              onClick={(x) => {
                x.preventDefault();
                setSelected(x.target.id);
                closeMenu();
              }}
            >
              {titles[index]}
            </a>
            {menuSettings.filter((y) => y.id === x).length
              ? menuSettings.filter((y) => y.id === x)[0].setting
              : null}
          </li>
        ))}
        <li>
          <a
            href={`/#scores`}
            className={selected === "scores" ? "on" : ""}
            onClick={(x) => {
              x.preventDefault();
              setSelected("scores");
              closeMenu();
            }}
          >
            Scores
          </a>
        </li>
      </ul>
      <div
        onClick={(x) => {
          x.preventDefault();
          closeMenu();
        }}
      />
    </ModalMenu>
  );
};

export default SideMenu;
