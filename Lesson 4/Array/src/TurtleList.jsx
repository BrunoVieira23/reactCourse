const turtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];

function TurtleList() {
  return (
    <>
      <h1>Teenage Mutant Ninja Turtles</h1>
      <p>
        {turtles.map((turtle) => (
          <li> {turtle} </li>
        ))}
      </p>
    </>
  );
}

export default TurtleList;
