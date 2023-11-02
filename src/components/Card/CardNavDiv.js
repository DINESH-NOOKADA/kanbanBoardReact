import React from "react";
import "./CardNavDiv.css";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import CardDiv from "./CardDiv";
const CardNavDiv = (props) => {
  const input = props.data.tickets;
  var inputArray = input;
  if (props.group === "User") {
    inputArray = input.map((ticket) => {
      const strings = ticket.status.replace(/ /g, "_");
      const statusIconMapping = props.statusiconMap[strings];

      if (statusIconMapping) {
        return {
          ...ticket,
          statusIcon: statusIconMapping.icon,
          statusColor: statusIconMapping.color,
        };
      } else {
        return {
          ...ticket,
        };
      }
    });
    const priorityIconMap = {};

    for (const item of props.priorityWithIcons) {
      priorityIconMap[item.id] = item.icons;
    }
    inputArray = inputArray.map((ticket) => {
      const matchingPriorityIcons = priorityIconMap[ticket.priority];

      if (matchingPriorityIcons) {
        return {
          ...ticket,
          icons: matchingPriorityIcons,
        };
      } else {
        return {
          ...ticket,
        };
      }
    });
  } else {
    inputArray = input.map((ticket) => {
      const matchingUser = props.data.users.find(
        (user) => user.id === ticket.userId
      );
      if (matchingUser) {
        return {
          ...ticket,
          userName: matchingUser.name,
        };
      }
      return ticket;
    });

    inputArray = inputArray.map((ticket) => {
      const matchingUser1 = props.usersWithIcons.find(
        (user) => user.id === ticket.userId
      );
      if (matchingUser1) {
        return {
          ...ticket,
          colorAttribute: matchingUser1.color,
        };
      }
      return ticket;
    });
  }
  const desiredStatus = props.stat.text;
  const stringWithSpaces = desiredStatus.replace(/_/g, " ");
  var filteredArray = [];
  if (props.group === "Priority")
    filteredArray = inputArray.filter(
      (item) => item.priority === props.stat.id
    );
  if (props.group === "Status")
    filteredArray = inputArray.filter(
      (item) => item.status === stringWithSpaces
    );
  if (props.group === "User") {
    filteredArray = inputArray.filter((item) => item.userId === props.stat.id);
    if (props.order === "Priority")
      filteredArray.sort((a, b) => b.priority - a.priority);
    if (props.order === "Title")
      filteredArray.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="cardMainDiv2">
      <div className="cardNavDiv">
        <div className="cardNavDiv1">
          {props.group !== "User" ? (
            <div
              className="cardNavDiv1Sym"
              style={{ color: props.stat.icons.color }}
            >
              {props.stat.icons.icon}
            </div>
          ) : (
            <div
              className="cardNavDiv1SymUser"
              style={{ backgroundColor: props.stat.color }}
            >
              {props.stat.icons.toUpperCase()}
            </div>
          )}
          <div className="cardNavDiv1Name">{props.stat.text}</div>
          <div className="cardNavDiv1Count">{filteredArray.length}</div>
        </div>
        <div className="cardNavDiv2">
          <div className="cardNavDiv2Sym">
            <AiOutlinePlus />
          </div>
          <div className="cardNavDiv2Sym">
            <BsThreeDots />
          </div>
        </div>
      </div>
      {filteredArray.length > 0 && (
        <div>
          {filteredArray.map((item, index) => (
            <CardDiv
              group={props.group}
              order={props.order}
              key={index}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardNavDiv;
