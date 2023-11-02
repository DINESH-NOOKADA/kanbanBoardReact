import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";
function App() {
  const [data, setData] = useState();
  const [group, setGroup] = useState(localStorage.getItem('group') || 'Status');
  const [order, setOrder] = useState(localStorage.getItem('order') || 'Priority');
  useEffect(() => {
    localStorage.setItem('group', group);
    localStorage.setItem('order', order);
    const apiUrl = "https://api.quicksell.co/v1/internal/frontend-assignment";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [group,order]);

  // const [group, setGroup] = useState("Status");
  // const [order, setOrder] = useState("Priority");


  const onChangeGroupHandler = (item) => {
    setGroup(item);
  };

  const onChangeOrderHandler = (item) => {
    setOrder(item);
  };

  return (
    <>
      <Nav
        onChangeGroupHandler={onChangeGroupHandler}
        onChangeOrderHandler={onChangeOrderHandler}
        group={group}
        order={order}
      />
      {data && <Card group={group} order={order} data={data} />}
    </>
  );
}

export default App;
