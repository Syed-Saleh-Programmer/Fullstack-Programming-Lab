const messages = {
  morning: "Good morning",
  afternoon: "Good afternoon",
  evening: "Good evening",
  night: "Good night",
};

const Greeting = ({ name, timeOfDay, bgColor }) => {
  const label = messages[timeOfDay?.toLowerCase()] || "Hello";
  const background = bgColor || "#0f172a";

  return (
    <article
      className="greeting-card"
      style={{ backgroundColor: background }}
      aria-label={`${label}, ${name}`}
    >
      <p className="card-kicker">{timeOfDay}</p>
      <h2 className="card-title">
        {label}, <span className="card-name">{name}</span>!
      </h2>
      <p className="card-copy">Hope you&apos;re having a great {timeOfDay}.</p>
    </article>
  );
};


export default Greeting;
