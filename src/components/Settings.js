import React from "react";
import makeChangeSettings from "./../modules/changeSettings";
import { SettingsDiv } from "./../styledcomponents/AppStyles";

const Settings = ({ settings, outSettings }) => {
  const changeSettings = makeChangeSettings(settings);

  return (
    <SettingsDiv>
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
      <p>
        Subset consonants:
        <br />
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
    </SettingsDiv>
  );
};

export default Settings;
