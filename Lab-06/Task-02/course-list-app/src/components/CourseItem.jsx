
const CourseItem = ({ courseName, courseType, instructor, duration }) => {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-800/70 p-4 shadow-xl shadow-slate-950/50 ring-1 ring-slate-700/70">
      <header className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold tracking-tight text-slate-50">{courseName}</h2>
        {courseType ? (
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
            {courseType}
          </span>
        ) : null}
      </header>

      <dl className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-300">
        <div className="space-y-1">
          <dt className="text-xs uppercase tracking-wide text-slate-500">Instructor</dt>
          <dd className="font-medium text-slate-100">{instructor}</dd>
        </div>
        <div className="space-y-1">
          <dt className="text-xs uppercase tracking-wide text-slate-500">Duration</dt>
          <dd className="font-medium text-slate-100">{duration}</dd>
        </div>
      </dl>
    </article>
  );
};

export default CourseItem;