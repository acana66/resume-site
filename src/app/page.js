import Link from "next/link";
import { resume, skills, projects, education } from "../lib/resume-data";
import VisitTracker from "../components/VisitTracker";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <VisitTracker />

      {/* 头部卡片 */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 text-white rounded-3xl p-8 md:p-12 mb-10 shadow-lg">
        <p className="text-indigo-200 text-sm mb-2">你好，我是</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{resume.name}</h1>
        <p className="text-lg md:text-xl text-indigo-100 mb-6">{resume.title}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {resume.tags.map((t) => (
            <span key={t} className="bg-white/20 px-3 py-1 rounded-full text-sm">{t}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <a href={`mailto:${resume.email}`} className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-full hover:bg-indigo-50">
            {resume.email}
          </a>
          <Link href="/resume.pdf" download className="border border-white/50 px-4 py-2 rounded-full hover:bg-white/10">
            下载简历 PDF
          </Link>
        </div>
      </section>

      {/* 基本信息 */}
      <Section title="基本信息">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
          <InfoItem label="姓名" value={resume.name} />
          <InfoItem label="现居" value={resume.location} />
          <InfoItem label="学校" value={resume.school} />
          <InfoItem label="专业" value={resume.major} />
          <InfoItem label="学历" value={resume.degree} />
          <InfoItem label="在校时间" value={resume.period} />
          <InfoItem label="求职意向" value={resume.intention} />
        </dl>
      </Section>

      {/* 专业技能 */}
      <Section title="专业技能">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((s) => (
            <div key={s.title} className="bg-white border border-slate-200 rounded-2xl p-5">
              <h3 className="font-semibold text-indigo-700 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 项目经历 */}
      <Section title="项目经历">
        <ol className="space-y-4">
          {projects.map((p, i) => (
            <li key={p.title} className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-slate-800">{i + 1}. {p.title}</h3>
                {p.tag && <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full shrink-0">{p.tag}</span>}
              </div>
              <p className="text-sm text-slate-500 mt-1">{p.description}</p>
              {p.duties && (
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  {p.duties.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="text-indigo-400 shrink-0">▸</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* 教育背景 */}
      <Section title="教育背景">
        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-semibold">{education[0].school} · {education[0].major}</h3>
            <span className="text-sm text-slate-500">{education[0].period}</span>
          </div>
          <p className="text-sm text-slate-500 mt-1">{education[0].degree}</p>
        </div>
      </Section>

      {/* 自我评价 */}
      <Section title="自我评价">
        <ul className="space-y-2">
          {resume.evaluation.map((e) => (
            <li key={e} className="flex gap-2 text-sm text-slate-600">
              <span className="text-indigo-400 shrink-0">✓</span>
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <span className="w-1.5 h-5 bg-indigo-600 rounded-full" />
        {title}
      </h2>
      {children}
    </section>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="flex gap-2">
      <dt className="text-slate-400 shrink-0">{label}</dt>
      <dd className="text-slate-700">{value}</dd>
    </div>
  );
}
