import React from 'react'
import {
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="button__categories">
      <Link to="/exercise1">
        <Button color="primary" className="button__position">Exercise1</Button>
      </Link>
      <Link to="/exercise2">
        <Button color="secondary" className="button__position">Exercise2</Button>
      </Link>
    </div>
  );
}

export default HomePage;