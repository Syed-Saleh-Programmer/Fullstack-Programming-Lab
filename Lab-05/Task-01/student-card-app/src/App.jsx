import './App.css'

const students = [
  {
    name: 'Ayesha Khan',
    rollNo: '22CS101',
    department: 'Computer Science',
    university: 'ABC University',
    color: '#f5f7fb',
  },
  {
    name: 'Bilal Ahmed',
    rollNo: '22EE204',
    department: 'Electrical Engineering',
    university: 'ABC University',
    color: '#f3f0ff',
  },
  {
    name: 'Sara Malik',
    rollNo: '22BBA089',
    department: 'Business Administration',
    university: 'ABC University',
    color: '#fef3e6',
  },
]

function StudentCard({ name, rollNo, department, university, color }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

  const accent = color || '#4f46e5'
  const gradient = `linear-gradient(135deg, #ffffff 0%, ${accent}1a 45%, ${accent}33 100%)`

  return (
    <article
      className="student-card"
      style={{ '--accent': accent, '--accent-strong': `${accent}e6`, background: gradient }}
    >
      <div className="student-card__top">
        <div className="avatar" aria-hidden="true">
          <span>{initials}</span>
        </div>
        <div className="identity">
          <p className="eyebrow eyebrow--inline">{rollNo}</p>
          <h3>{name}</h3>
          <p className="muted">{university}</p>
        </div>
      </div>

      <dl className="student-card__details" aria-label={`${name} details`}>
        <div className="detail-row">
          <dt>Department</dt>
          <dd>{department}</dd>
        </div>
        <div className="detail-row">
          <dt>University</dt>
          <dd>{university}</dd>
        </div>
      </dl>

      <div className="tag-row" aria-hidden="true">
        <span className="tag">Active</span>
        <span className="tag tag--outline">Semester 4</span>
      </div>
    </article>
  )
}

function App() {
  return (
    <main className="app-shell">
      <section className="intro">
        <p className="eyebrow">Lab Task 1</p>
        <h1>Student Information Cards</h1>
        <p className="lede">Reusable component with props for name, roll number, department, and university.</p>
      </section>

      <section className="card-grid" aria-label="Student cards">
        {students.map((student) => (
          <StudentCard key={student.rollNo} {...student} />
        ))}
      </section>
    </main>
  )
}

export default App
