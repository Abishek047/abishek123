// src/components/Certifications.jsx
export default function Certifications() {
const certs = [
{ title: "Guvi Python Certificate", date: "Oct 2023 – Dec 2023", desc: "Practical Python programming knowledge." },
{ title: "Soft Skills Certificate", date: "2023", desc: "Enhanced communication, teamwork, and professional skills." }
];


return (
<section id="certifications" className="py-20 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-bold text-accent mb-10">Certifications</h2>
<div className="grid md:grid-cols-2 gap-6">
{certs.map((c, i) => (
<div key={i} className="bg-gray-800 p-6 rounded-xl shadow-md">
<h3 className="text-lg font-semibold">{c.title}</h3>
<p className="text-sm text-gray-400">{c.date}</p>
<p className="mt-2 text-gray-300">{c.desc}</p>
</div>
))}
</div>
</div>
</section>
);
}