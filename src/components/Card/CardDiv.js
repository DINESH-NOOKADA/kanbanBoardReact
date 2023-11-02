import React from "react";
import "./CardDiv.css";
import { GoDotFill } from "react-icons/go";
const CardDiv = (props) => {
  var title = props.item.title;
  if (title.length > 50) {
    const t1 = title.substring(0, 50);
    const t2 = "...";
    title = t1 + t2;
  }

  return (
    <>
      <div className="cardDiv">
        <div className="cardDivId">
          <div className="cardDivIdNum">{props.item.id}</div>
          {props.group !== "User" && (
            <div className="cardDivIdPhoto" style={{backgroundColor:props.item.colorAttribute}}>
              {(props.item.userName[0]+props.item.userName[1]).toUpperCase()}
            </div>
          )}
        </div>
        <div className="cardDivName">
          {props.group === "User" && (
            <div
              className="cardDivNameSym"
              style={{ color: props.item.statusColor }}
            >
              {props.item.statusIcon}
            </div>
          )}
          <div className="cardDivNameText">{title}</div>
        </div>
        <div className="cardFeature">
          {props.group === "User" && (
            <div className="cardFeatureSym">{props.item.icons.icon}</div>
          )}
          <div className="cardFeatureSym" style={{ color: "gray" }}>
            <GoDotFill />
          </div>
          <div className="cardFeatureName" style={{ color: "gray" }}>
            Feature Request
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDiv;
