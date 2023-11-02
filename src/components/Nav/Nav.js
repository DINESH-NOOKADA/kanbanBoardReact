import React, { useState } from "react";
import "./Nav.css";
import DropDown from "./DropDown";
import { BsFilterSquareFill } from "react-icons/bs";
import { BiSolidChevronUp, BiSolidChevronDown } from "react-icons/bi";


const Nav = (props) => {
  const [showUp, setShowUp] = useState(false);
  const [showUp1, setShowUp1] = useState(false);
  const [showUp2, setShowUp2] = useState(false);
  const onClickUp1handler = () => {
    if (showUp1 === true) setShowUp1(false);
    if (showUp1 === false) {
      setShowUp1(true);
      setShowUp2(false);
    }
  };
  const onClickUp2handler = () => {
    if (showUp2 === true) setShowUp2(false);
    if (showUp2 === false) {
      setShowUp2(true);
      setShowUp1(false);
    }
  };
  const group = ["Status", "User", "Priority"];
  const order = ["Priority", "Title"];
  const onClickUphandler = () => {
    if (showUp === true) setShowUp(false);
    else setShowUp(true);
  };
  return (
    <div className="NavMainDiv">
      <div className="DisplayDropMainDiv">
        <BsFilterSquareFill className="DisplayDropIcon" />
        <div className="DisplayDrop">Display</div>
        {!showUp ? (
          <BiSolidChevronDown
            className="DisplayDropArrow"
            onClick={onClickUphandler}
          />
        ) : (
          <BiSolidChevronUp
            className="DisplayDropArrow"
            onClick={onClickUphandler}
          />
        )}
      </div>
      {showUp && (
        <div className="NavShowDropDownMainDiv">
          <DropDown
            onClickUp_handler={onClickUp1handler}
            show_Up={showUp1}
            set_show_Up={setShowUp1}
            drop={group}
            name={"Grouping"}
            onChangeDropHandler={props.onChangeGroupHandler}
            setShowUp={setShowUp}
            group={props.group}
          />
          <DropDown
            onClickUp_handler={onClickUp2handler}
            set_show_Up={setShowUp2}
            show_Up={showUp2}
            drop={order}
            name={"Ordering"}
            onChangeDropHandler={props.onChangeOrderHandler}
            setShowUp={setShowUp}
            group={props.order}
          />
        </div>
      )}
    </div>
  );
};

export default Nav;
