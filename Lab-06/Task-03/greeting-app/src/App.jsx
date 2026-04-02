import "./App.css";
import Greeting from "./components/Greeting";

const greetings = [
  { id: 1, name: "Ayesha", timeOfDay: "morning", bgColor: "#0ea5e9" },
  { id: 2, name: "Bilal", timeOfDay: "afternoon", bgColor: "#f59e0b" },
  { id: 3, name: "Sara", timeOfDay: "evening", bgColor: "#6366f1" },
];

function App() {
  return (
    <main className="page">
      <section className="intro">
        <p className="eyebrow">Friendly greetings</p>
        <h1 className="title">Say hello based on the time of day</h1>
        <p className="lede">Each card personalizes the greeting and tint using props.</p>
      </section>

      <section className="grid">
        {greetings.map((item) => (
          <Greeting key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}

export default App;
