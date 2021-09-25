import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <h1>Landing Page</h1>

      <a href="/login">LOGIN a tag</a>

      <br />

      <Link to="/login">Login</Link>
    </>
  );
}
