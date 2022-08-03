import React from "react";
import "./Featured.css";

function Featured() {
  return (
    <div className="featured">
      <h1 className="featured-text"> Top Featured listings</h1>
      <p className="featured-text">Selected listings by City, State, & Zip based on views.</p>
      <div className="container">
        <img className="span-3 image-grid-row-2"
          src={
            "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          alt="house"
        />
        <img
          src={
            "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt="house"
        />
        <img
          src={
            "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt="house"
        />
        <img
          src={
            "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2UlMjBiZWRyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt="house"
        />
        <img
          src={
            "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlJTIwYmF0aHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          alt="house"
        />

        <div className="span-3 img-details">
          <div className="top">
            <h2> 78787 Lakeway st. Austin, Tx </h2>
            <p>House for Sale</p>
            <p className="price"> $3,999,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold"> Bedrooms:</p>
                <p>6</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>5</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Sqaure Feet:</p>
                <p>5,500</p>
              </div>
              <div className="info">
                <p className="bold"> Est Payment:</p>
                <p>$10,999/mo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            A beautifl modern house with big size pool, 5 bathrooms, amazing
            hill view and lake view as well
          </p>
          <button className="btn">View Listing</button>
        </div>
      </div>


      {/* second section */}
      <div className="container">
        <img className="order-2"
          src={
            "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt="house"
        />
        <img className="order-3"
          src={
            "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt="house"
        />
          <img className="span-3 image-grid-row-2 order-1"
          src={
            "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          alt="house"
        />
        <img className="order-4"
          src={
            "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2UlMjBiZWRyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt="house"
        />
        <img className="order-5"
          src={
            "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlJTIwYmF0aHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          alt="house"
        />

        {/* button section on section 2 */}
         <div className="span-2 right-img-details order-7">
          <p>
            A beautifl modern house with big size pool, 5 bathrooms, amazing
            hill view and lake view as well
          </p>
          <button className="btn">View Listing</button>
        </div>


        <div className="span-3 img-details order-6">
          <div className="top">
            <h2> 78787 Lakeway st. Austin, Tx </h2>
            <p>House for Sale</p>
            <p className="price"> $3,999,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold"> Bedrooms:</p>
                <p>6</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>5</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Sqaure Feet:</p>
                <p>5,500</p>
              </div>
              <div className="info">
                <p className="bold"> Est Payment:</p>
                <p>$10,999</p>
              </div>
            </div>
          </div>
        </div>
       

      </div>
   
           


    </div>
  );
}

export default Featured;
