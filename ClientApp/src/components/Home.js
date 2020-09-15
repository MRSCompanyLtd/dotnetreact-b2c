import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {

    return (
      <div style={{padding: '12px'}}>
        <h1>React + .NET Core</h1>
        <p>Click <Link to="/hidden" /> </p>
      </div>
    );
}

export default Home