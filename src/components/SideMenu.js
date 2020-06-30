import React from "react";
import { ModalMenu, SettingDiv } from "./../styledcomponents/MenuStyles.js";
import makeChangeSettings from "./../modules/changeSettings";

//TODO: Refactor this!

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
                { id: "stop", name: "Stops" },
                { id: "nasal", name: "Nasals" },
                { id: "semivowel", name: "Semivowels" },
                { id: "sibilant", name: "Sibilants" },
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
                { id: "gutteral", name: "Gutterals" },
                { id: "palatal", name: "Palatals" },
                { id: "retroflex", name: "Retroflexes" },
                { id: "dental", name: "Dentals" },
                { id: "labial", name: "Labials" },
              ]}
            />
          </p>
          <p>
            <label>
              <strong>Include by voiced:</strong>
            </label>
            <CheckboxList
              classification={"consonantVoiced"}
              list={[
                { id: "voiced", name: "Voiced" },
                { id: "unvoiced", name: "Unvoiced" },
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
                { id: "aspirated", name: "Aspirated" },
                { id: "unaspirated", name: "Unaspirated" },
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
        <li>
          <a
            href={`/#settings`}
            className={selected === "settings" ? "on" : ""}
            onClick={(x) => {
              x.preventDefault();
              setSelected("settings");
              closeMenu();
            }}
          >
            Settings
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
