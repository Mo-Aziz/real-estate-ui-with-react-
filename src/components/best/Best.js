import React from "react";
import "./Best.css";

const Best = () => {
  return (
    <div className="best">
      <h1> Find Best Rated Properties</h1>
      <div>
        <p>
          {" "}
          <span className="bold">All</span>
        </p>
        <p> Commerical</p>
        <p>Residentail </p>
        <p> Agricultural</p>
      </div>
      <div className="container">
        <img
          src={
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80"
          }
          alt=""
        />
        <img
          src={
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80"
          }
          alt=""
        />
        <img
          src={
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80"
          }
          alt=""
        />
      </div>
      <button className="btn"> View All </button>
    </div>
  );
};

export default Best;
