const Dude = ({ age, name }) => {
  let message;

  message = age >= 41 ? "You are old" : "You are a baby";

  //If Statement

  // if (age >= 41) {
  // message = "You are old";
  //} else {
  // message = "You are a baby";
  // }

  return (
    <div>
      <h2>
        Your name is {name} and your age is {age}!
      </h2>
      <p>{message}</p>
    </div>
  );
};

export default Dude;
