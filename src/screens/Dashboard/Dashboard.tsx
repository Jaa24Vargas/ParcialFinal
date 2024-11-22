// src/screens/Dashboard.tsx
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeee";
import { fetchPoems } from "../../services/poetry";
import { Link } from "react-router-dom"; 
import "./dashboard.css";


const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { poems, loading, error } = useAppSelector((state) => state.poems);

  useEffect(() => {
    dispatch(fetchPoems());
  }, [dispatch]);

  const onViewPoem = (id: string) => {
    console.log(`Ver poema con ID: ${id}`);
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      {loading && <p>Loading poems...</p>}
      {error && <p>{error}</p>}

      <div className="poem-list">
        {poems.length > 0 ? (
          poems.map((poem) => (
            <div key={poem.id} className="poem-card">
              <h2 className="poem-title">{poem.title}</h2>
              <p className="poem-excerpt">{poem.excerpt}...</p>
              {}
              <Link
                to={`/detail/${poem.id}`} 
                state={{ poem }} 
              >
                <button className="poem-button" onClick={() => onViewPoem(poem.id)}>
                  Read More
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p>No poems available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
