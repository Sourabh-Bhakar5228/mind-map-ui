import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2>Chatbot Mind Map</h2>
        <p>
          This is the brain and the memory of the chatbot. You can add, edit,
          and analyze the source data being used to answer user queries from
          here
        </p>
      </div>
      <div className="header-right">
        <button className="guided-tour">GUIDED TOUR</button>
        <button className="select-org">SELECT ORG</button>
        <div className="user-avatar">
          <img src="https://via.placeholder.com/40" alt="User Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
