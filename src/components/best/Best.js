import React from "react";
import "./Best.css";

const Best = () => {
  return (
    <div className="best">
      <h1> Find Best Rated Properties</h1>
      <div>
        <p>
          <span className="bold">All</span>
        </p>
        <p> Commerical</p>
        <p>Residentail </p>
        <p> Agricultural</p>
      </div>
      <div className="container">
        <img
          src={
            "https://images.unsplash.com/photo-1525438160292-a4a860951216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwYXJ0bWVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          alt="house"
        />
        <img
          src={
            "https://images.unsplash.com/photo-1638973140785-3b918e290682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwYXJ0bWVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          alt="house"
        />
        <img
          src={
            "https://images.unsplash.com/photo-1573716070395-7bd1212b94ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGFwYXJ0bWVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          alt="house"
        />
      </div>
      <button className="btn"> View All </button>
    </div>
  );
};

export default Best;
