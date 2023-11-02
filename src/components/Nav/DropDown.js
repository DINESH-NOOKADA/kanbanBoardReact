import React, { useState } from "react";
import { BiSolidChevronUp, BiSolidChevronDown } from "react-icons/bi";
import "./DropDown.css";
const DropDown = (props) => {
  const [inputState, setInputState] = useState(props.group);
  console.log(props.name,inputState);
  return (
    <>
      <div className="NavShow">
        <div className="NavShowName">{props.name}</div>
        <div className="NavShowDrop">
          <div
            className={
              props.name === "Grouping"
                ? "NavShowDropDown"
                : "NavShowDropDownOrder"
            }
          >
            <input className="NavShowDropDownInput" value={inputState} />
            {!props.show_Up ? (
              <BiSolidChevronDown
                className="NavDisplayDropArrow"
                onClick={props.onClickUp_handler}
              />
            ) : (
              <BiSolidChevronUp
                className="NavDisplayDropArrow"
                onClick={props.onClickUp_handler}
              />
            )}
          </div>
          {props.show_Up && (
            <div
              className={
                props.name === "Grouping"
                  ? "NavShowDropShow"
                  : "NavShowDropShowOrder"
              }
            >
              {props.drop.map((item, index) => (
                <div
                value={item}
                  key={index}
                  className="NavShowDropShow1"
                  onClick={() => {
                    setInputState(item);
                    props.set_show_Up(false);
                    props.onChangeDropHandler(item)
                    props.setShowUp(false);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DropDown;