import React from "react";
import Logo from "./Logo.jpg";
import { Todo } from "../styledComponents/StyledComponents";

const Title = () => {
  return (
    <>
      <div className="title">
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: 1920,
            height: 250,
            opacity: 0.9,
            borderRadius: 10,
            userSelect: "none",
            position: "absolute",
          }}
        />
        <Todo className="Todo">T O D O</Todo>
      </div>
    </>
  );
};

export default Title;
