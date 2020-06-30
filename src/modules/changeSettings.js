const makeChangeSettings = (settings) => {
  return (thisSetting, thisSubsetting) => {
    const newSettings = Object.assign({}, settings);
    if (thisSubsetting) {
      newSettings[thisSetting][thisSubsetting] = !settings[thisSetting][
        thisSubsetting
      ];
      if (
        !Object.keys(newSettings[thisSetting])
          .map((x) => newSettings[thisSetting][x])
          .reduce((x, y) => x || y)
      ) {
        // if all keys of thisSetting are set to false, force this one to be true
        newSettings[thisSetting][thisSubsetting] = true;
      }
    } else {
      newSettings[thisSetting] = !settings[thisSetting];
    }
    return newSettings;
  };
};

export default makeChangeSettings;
