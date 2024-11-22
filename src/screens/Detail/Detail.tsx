// src/screens/Detail/Detail.tsx
import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeee";
import "./detail.css";

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  const poem = location.state?.poem;

  const { poems } = useAppSelector((state) => state.poems);
  const selectedPoem = poem || poems.find((poem) => poem.id === id);

  if (!selectedPoem) return <p>Poem not found</p>;

  const { title, author, lines, linecount } = selectedPoem;

  return (
    <div className="detail">
      <button className="back-button" onClick={() => navigate("/dashboard")}>
        &larr; Back
      </button>
      <h1 className="title">{title}</h1>
      <h2 className="author">By {author || "Unknown"}</h2>
      <div className="content">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <p className="linecount">{linecount} lines</p>
    </div>
  );
};

export default Detail;
