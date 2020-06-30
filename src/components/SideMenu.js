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
            <label>
              <input
                type="checkbox"
                checked={settings.consonantTypes.stop}
                onChange={() => {
                  outSettings(changeSettings("consonantTypes", "stop"));
                }}
              ></input>
              Stops
            </label>
            <label>
              <input
                type="checkbox"
                checked={settings.consonantTypes.nasal}
                onChange={() => {
                  outSettings(changeSettings("consonantTypes", "nasal"));
                }}
              ></input>
              Nasals
            </label>
            <label>
              <input
                type="checkbox"
                checked={settings.consonantTypes.semivowel}
                onChange={() => {
                  outSettings(changeSettings("consonantTypes", "semivowel"));
                }}
              ></input>
              Semivowels
            </label>
            <label>
              <input
                type="checkbox"
                checked={settings.consonantTypes.sibilant}
                onChange={(x) => {
                  outSettings(changeSettings("consonantTypes", "sibilant"));
                }}
              ></input>
              Sibilants
            </label>
          </p>
          <p>
            <label>
              <strong>Include by class:</strong>
            </label>
            <label>
              <input
                type="checkbox"
                checked={settings.consonantClasses.gutteral}
                onChange={() => {
                  outSettings(changeSettings("consonantClasses", "gutteral"));
                }}
              ></input>
              Gutteral
            </label>
            <label>
              <input
                type="checkbox"
                checked={settings.consonantClasses.palatal}
                onChange={() => {
                  outSettings(changeSettings("consonantClasses", "palatal"));
                }}
              ></input>
              Palatal
            </label>
            <label>
              <input
                type="checkbox"
                checked={settings.consonantClasses.retroflex}
                onChange={() => {
                  outSettings(changeSettings("consonantClasses", "retroflex"));
                }}
              ></input>
              Retroflex
            </label>
            <label>
              <input
                type="checkbox"
                checked={settings.consonantClasses.dental}
                onChange={(x) => {
                  outSettings(changeSettings("consonantClasses", "dental"));
                }}
              ></input>
              Dental
            </label>
            <label>
              <input
                type="checkbox"
                checked={settings.consonantClasses.labial}
                onChange={(x) => {
                  outSettings(changeSettings("consonantClasses", "labial"));
                }}
              ></input>
              Labial
            </label>
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
