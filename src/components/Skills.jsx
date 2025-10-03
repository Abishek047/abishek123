// src/components/Skills.jsx
export default function Skills(){
const tech = ['HTML','CSS','JavaScript','React.js','Node.js','Next.js','Python','MySQL','MongoDB','Postgres','Google Cloud','Docker','Firebase','Cloudinary']
const soft = ['Analytical Thinking','Problem Solving','Communication','Team Collaboration','Time Management','Critical Thinking']


return (
<section id="skills" className="py-20 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-bold text-accent mb-10 text-center md:text-left">Skills</h2>
<div className="grid md:grid-cols-2 gap-10">
<div className="bg-gray-800 p-6 rounded-xl shadow-md">
<h3 className="text-2xl font-semibold text-accent mb-4">Technical Skills</h3>
<div className="flex flex-wrap gap-3">
{tech.map((t,i)=> (
<span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200">{t}</span>
))}
</div>
</div>
<div className="bg-gray-800 p-6 rounded-xl shadow-md">
<h3 className="text-2xl font-semibold text-accent mb-4">Soft Skills</h3>
<ul className="list-disc list-inside text-gray-300 space-y-2">
{soft.map((s,i)=> <li key={i}>{s}</li>)}
</ul>
</div>
</div>
</div>
</section>
)
}