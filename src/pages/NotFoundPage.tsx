import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h1>404</h1>
      <h2>The page you are trying to access is not found.</h2>

      <Link to="/home">Redirect back to Home</Link>
    </>
  );
}
