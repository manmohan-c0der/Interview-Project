import { FaRegCreditCard } from "react-icons/fa6";
import { FaList } from "react-icons/fa";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./App.css";
import Card from "./components/card";

function App() {
  const [viewMode, setViewMode] = useState("list");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleView = () => {
    setViewMode(viewMode === "list" ? "grid" : "list");
  };

  const handleFeedbackClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const newsData = [
    {
      title: "Urna, tempor aliquet...",
      desc: "Non suscipit sagittis nunc, pharetra...",
      date: "Mon, 21 Dec 2020 14:57 GMT",
    },
    {
      title: "Eget eu ipsum in sed placerat...",
      desc: "Quam aliquam tincidunt faucibus...",
      date: "Mon, 21 Dec 2020 14:57 GMT",
    },
    {
      title: "Accumsan amet sit in id...",
      desc: "Arcu libero vivamus egestas sit...",
      date: "Mon, 21 Dec 2020 14:57 GMT",
    },
    {
      title: "Nisl est dui egestas turpis...",
      desc: "Porttitor in amet ultrices aliquam...",
      date: "Mon, 21 Dec 2020 14:57 GMT",
    },
  ];

  const cards = [
    {
      title: "Sed volutpat vitae id eleifend...",
      description: "Interdum pretium porttitor nibh cursus...",
      date: "Mon, 21 Dec 2020 14:57 GMT",
      image: "vite.svg",
    },
    {
      title: "Risus natoque porta eget vestibulum...",
      description: "Nec facilisis duis venenatis nulla porta...",
      date: "Mon, 21 Dec 2020 14:57 GMT",
      image: "vite.svg",
    },
    {
      title: "Risus natoque porta eget vestibulum...",
      description: "Nec facilisis duis venenatis nulla porta...",
      date: "Mon, 21 Dec 2020 14:57 GMT",
      image: "vite.svg",
    },
    {
      title: "Risus natoque porta eget vestibulum...",
      description: "Nec facilisis duis venenatis nulla porta...",
      date: "Mon, 21 Dec 2020 14:57 GMT",
      image: "vite.svg",
    },
    {
      title: "Risus natoque porta eget vestibulum...",
      description: "Nec facilisis duis venenatis nulla porta...",
      date: "Mon, 21 Dec 2020 14:57 GMT",
      image: "vite.svg",
    },
    {
      title: "Risus natoque porta eget vestibulum...",
      description: "Nec facilisis duis venenatis nulla porta...",
      date: "Mon, 21 Dec 2020 14:57 GMT",
      image: "vite.svg",
    },
  ];

  return (
    <div className={`dashboard ${isFormVisible ? "expanded" : ""}`}>
      <div className={`sidebar ${isFormVisible ? "expanded" : ""}`}>
        <div className="greeting">
          <img src="vite.svg" alt="profile" />
          <p>
            Hi Reader, <br /> Here's your News!
          </p>
        </div>

        <div className="view-toggle">
          <h3>View Toggle</h3>
          <div className="toggle-switch">
            <div
              onClick={toggleView}
              className={viewMode === "list" ? "selected" : ""}
            >
              <FaRegCreditCard />
            </div>
            <div
              onClick={toggleView}
              className={viewMode === "grid" ? "selected" : ""}
            >
              <FaList />
            </div>
          </div>
        </div>

        <div className="feedback">
          <h3>Have a Feedback?</h3>
          <button onClick={handleFeedbackClick}>We're Listening!</button>
        </div>

        {/* Form for feedback */}
        {isFormVisible && (
          <div className="feedback-form">
            <form>
              <div>
                <label>First Name:</label>
                <input type="text" placeholder="John" />
              </div>
              <div>
                <label>Last Name:</label>
                <input type="text" placeholder="Doe" />
              </div>
              <div>
                <label>Address:</label>
                <textarea placeholder="Enter your full Postal Address" />
              </div>
              <div>
                <label>Country:</label>
                <input type="text" placeholder="India" />
              </div>
              <div>
                <label>Email ID:</label>
                <input type="email" placeholder="example@sample.com" />
                <span>Please enter a valid e-mail</span>
              </div>
              <div>
                <label>Phone Number:</label>
                <input type="text" placeholder="+91 123456789" />
                <span>Please enter a valid number</span>
              </div>
              <button type="submit">Submit Feedback</button>
            </form>
          </div>
        )}
      </div>

      {viewMode === "list" ? (
        <div className="news-list">
          {newsData.map((news, index) => (
            <div className="news-item" key={index}>
              <img src="vite.svg" alt="news" />
              <div className="news-content">
                <h4>{news.title}</h4>
                <p>{news.desc}</p>
                <span>{news.date}</span>
              </div>
              <button className="delete-btn">X</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="card-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              date={card.date}
              image={card.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
