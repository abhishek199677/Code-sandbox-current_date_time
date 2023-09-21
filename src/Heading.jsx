import React from "react";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const CustomStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    CustomStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good afternoon";
    CustomStyle.color = "green";
  } else {
    greeting = "Good night";
    CustomStyle.color = "blue";
  }

  return (
    <h1 className="Heading" style={CustomStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
