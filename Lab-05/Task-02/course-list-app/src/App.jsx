import "./index.css";
import CourseItem from "./components/CourseItem";

const courses = [
  {
    id: 1,
    courseName: "Fullstack Fundamentals",
    instructor: "Dr. Ayesha Malik",
    duration: "8 weeks",
    courseType: "Online",
  },
  {
    id: 2,
    courseName: "Data Structures in JS",
    instructor: "Imran Qureshi",
    duration: "6 weeks",
    courseType: "Offline",
  },
  {
    id: 3,
    courseName: "UI/UX for Developers",
    instructor: "Sara Bhatti",
    duration: "4 weeks",
    courseType: "Online",
  },
  {
    id: 4,
    courseName: "DevOps Crash Course",
    instructor: "Kamran Siddiqui",
    duration: "5 weeks",
    courseType: "Online",
  },
  {
    id: 5,
    courseName: "Database Design",
    instructor: "Nida Rehman",
    duration: "7 weeks",
    courseType: "Offline",
  },
];

function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-12">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          Course Catalog
        </p>
        <h1 className="text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
          Explore curated courses and stay on track
        </h1>
        <p className="max-w-2xl text-slate-400">
          Each course is crafted to be concise, instructor-led, and laser focused
          on practical skills you can apply immediately.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {courses.map((course) => (
          <CourseItem key={course.id} {...course} />
        ))}
      </section>
    </main>
  );
}

export default App;
