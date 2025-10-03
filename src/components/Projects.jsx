// src/components/Projects.jsx
export default function Projects(){
  const projects = [
    {
      title: 'Writemind — AI Blogging Platform',
      desc: 'AI-assisted blogging platform with cloud media storage. Tech: React, Next.js, Node, Firebase, Cloudinary, Tailwind.',
      github: '#',
      demo: '#'
    },
    {
      title: 'CoursePro — Online Course Platform',
      desc: 'Course upload & management platform with authentication and content features. Tech: React, Next.js, Firebase, Cloudinary.',
      github: '#',
      demo: '#'
    },
    {
      title: 'Weather App',
      desc: 'Real-time weather app using public Weather API with dynamic UI updates. Tech: HTML, CSS, JS.',
      github: '#',
      demo: '#'
    },
    {
      title: 'Personal Finance — Monthly Prediction (ML)',
      desc: 'Currently in progress: ML pipeline to predict monthly expenses & income. Tech: Node.js, JavaScript, Tailwind, PostgreSQL, Google Cloud Authentication, ML models.',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <article key={i} className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-300 mb-4">{p.desc}</p>
              </div>
              <div className="flex gap-4 mt-auto">
                <a href={p.github} className="text-accent hover:underline">GitHub</a>
                <a href={p.demo} className="text-accent hover:underline">Live Demo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}