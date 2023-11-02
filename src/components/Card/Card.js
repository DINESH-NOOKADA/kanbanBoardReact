import React from "react";
import CardNavDiv from "./CardNavDiv";
import { BiLogOut } from "react-icons/bi";
import { RiCalendarTodoFill } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { IoMdCloudDone } from "react-icons/io";
import {
  MdCancel,
  MdSignalWifiStatusbar4Bar,
  MdSignalWifiStatusbar2Bar,
  MdSignalWifiStatusbar1Bar,
} from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import "./Card.css";
const Card = (props) => {
  var groupWithIcon = {};
  var userData = [];
  var userId = [];
  if (props.data) {
    userData = props.data.users.map((user) => user.name);
    userId = props.data.users.map((user) => user.id);
  }
  const status = ["Backlog", "Todo", "In_progress", "Done", "Cancelled"];
  const priority = ["No_Priority", "Urgent", "High", "Medium", "Low"];
  const priorityid = [0, 4, 3, 2, 1];
  const color = ["pink", "#3300CC", "	#CC6633", "Green", "purple"];
  const statusiconMap = {
    Backlog: { icon: <BiLogOut />, color: "black" },
    Todo: { icon: <RiCalendarTodoFill />, color: "gray" },
    In_progress: { icon: <GiProgression />, color: "yellow" },
    Done: { icon: <IoMdCloudDone />, color: "blue" },
    Cancelled: { icon: <MdCancel />, color: "red" },
  };
  const priorityiconMap = {
    No_Priority: { icon: <BiDotsHorizontalRounded />, color: "black" },
    Urgent: { icon: <FcHighPriority />, color: "gray" },
    High: { icon: <MdSignalWifiStatusbar4Bar />, color: "black" },
    Medium: { icon: <MdSignalWifiStatusbar2Bar />, color: "black" },
    Low: { icon: <MdSignalWifiStatusbar1Bar />, color: "black" },
  };

  const statusWithIcons = status.map((str, index) => ({
    id: index,
    text: str,
    icons: statusiconMap[str],
  }));
  const priorityWithIcons = priority.map((str, index) => ({
    id: priorityid[index],
    text: str,
    icons: priorityiconMap[str],
  }));
  const usersWithIcons = userData.map((str, index) => ({
    id: userId[index],
    text: str,
    icons: str[0] + str[1],
    color: color[index],
  }));

  if (props.group === "Status") groupWithIcon = statusWithIcons;
  if (props.group === "Priority") groupWithIcon = priorityWithIcons;
  if (props.group === "User") groupWithIcon = usersWithIcons;
  return (
    <div className="cardMainDiv1">
      {groupWithIcon.map((stat, index) => (
        <CardNavDiv
          priorityid={priorityid}
          order={props.order}
          group={props.group}
          key={index}
          data={props.data}
          stat={stat}
          status={stat.text}
          priorityWithIcons={priorityWithIcons}
          statusiconMap={statusiconMap}
          usersWithIcons={usersWithIcons}
        />
      ))}
    </div>
  );
};

export default Card;
