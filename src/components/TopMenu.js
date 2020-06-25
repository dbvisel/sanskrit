import React from "react";
import { TopMenuNav } from "./../styledcomponents/TopMenuStyles";

const TopMenu = ({ ids, titles, selected, setSelected }) => {
  return (
    <TopMenuNav>
      {ids.map((x, index) => (
        <a
          href={`/#${x}`}
          key={index}
          id={x}
          className={x === selected ? "on" : ""}
          onClick={(x) => {
            x.preventDefault();
            console.log(x.target.id);
            setSelected(x.target.id);
          }}
        >
          {titles[index]}
        </a>
      ))}
      <a
        href={`/#scores`}
        className={selected === "scores" ? "on" : ""}
        onClick={(x) => {
          x.preventDefault();
          setSelected("scores");
        }}
      >
        Scores
      </a>{" "}
      <a
        href={`/#settings`}
        className={selected === "settings" ? "on" : ""}
        onClick={(x) => {
          x.preventDefault();
          setSelected("settings");
        }}
      >
        Settings
      </a>
    </TopMenuNav>
  );
};

export default TopMenu;
