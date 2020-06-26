import React from "react";
import { SettingsDiv } from "./../styledcomponents/AppStyles";

const Settings = ({ settings, outSettings }) => {
  const changeSetting = (thisSetting, thisSubsetting) => {
    const newSettings = Object.assign({}, settings);
    if (thisSubsetting) {
      newSettings[thisSetting][thisSubsetting] = !settings[thisSetting][
        thisSubsetting
      ];
    } else {
      newSettings[thisSetting] = !settings[thisSetting];
    }
    outSettings(newSettings);
  };
  return (
    <SettingsDiv>
      <p>
        <label>
          <input
            type="checkbox"
            checked={settings.useClassifiers}
            onChange={() => {
              changeSetting("useClassifiers");
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
              changeSetting("useUncommonCharacters");
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
              changeSetting("consonantTypes", "stop");
            }}
          ></input>
          Stops
        </label>
        <label>
          <input
            type="checkbox"
            checked={settings.consonantTypes.nasal}
            onChange={() => {
              changeSetting("consonantTypes", "nasal");
            }}
          ></input>
          Nasals
        </label>
        <label>
          <input
            type="checkbox"
            checked={settings.consonantTypes.semivowel}
            onChange={() => {
              changeSetting("consonantTypes", "semivowel");
            }}
          ></input>
          Semivowels
        </label>
        <label>
          <input
            type="checkbox"
            checked={settings.consonantTypes.sibilant}
            onChange={(x) => {
              const newSettings = Object.assign({}, settings);
              newSettings.consonantTypes.sibilant = !settings.consonantTypes
                .sibilant;
              outSettings(newSettings);
            }}
          ></input>
          Sibilants
        </label>
      </p>
    </SettingsDiv>
  );
};

export default Settings;
