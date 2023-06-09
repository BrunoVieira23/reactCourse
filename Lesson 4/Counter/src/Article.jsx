import React from "react";
import { useState } from "react";

function Article({ counter }, handleDecrement = {}, handleIncrement = {}) {
  const [username, setUsername] = useState("Waiting for a name");
  return (
    <article className="p-4">
      {username}
      <br />
      <br />
      you have <strong> {counter} </strong> unread messages.
      <br />
      <br />
      Please go to your inbox to read them.
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <label htmlFor="username">What's your name? </label>
      <input
        name="username"
        placeholder="Please fill me!!!"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        type="text"
      />
    </article>
  );
}

export default Article;
