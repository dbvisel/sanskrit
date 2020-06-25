import React from "react";
import { SettingsDiv } from "./../styledcomponents/AppStyles";

const Settings = ({ settings, outSettings }) => (
  <SettingsDiv>
    <p>
      <label>
        <input
          type="checkbox"
          checked={settings.useClassifiers}
          onChange={(x) => {
            const newSettings = Object.assign({}, settings);
            newSettings.useClassifiers = !settings.useClassifiers;
            outSettings(newSettings);
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
          onChange={(x) => {
            const newSettings = Object.assign({}, settings);
            newSettings.useUncommonCharacters = !settings.useUncommonCharacters;
            outSettings(newSettings);
          }}
        ></input>
        Include uncommon characters
      </label>
    </p>
  </SettingsDiv>
);

export default Settings;
