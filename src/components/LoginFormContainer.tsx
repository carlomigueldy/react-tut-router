import React, { useState } from "react";
import { useHistory } from "react-router";

export default function LoginFormContainer() {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);

  function onSubmit(event: any) {
    event.preventDefault();

    if (email == "admin@admin.com") {
      history.push("/home");
      return;
    }

    setShowError(true);
    // history.push("/unauthorized");
  }

  return (
    <>
      {showError ? "That email address does not exist" : <> ... </>}

      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
}
