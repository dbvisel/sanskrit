import React from "react";
import { ModalMenu } from "./../styledcomponents/AppStyles.js";

const SideMenu = ({ ids, titles, selected, setSelected, closeMenu }) => {
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
