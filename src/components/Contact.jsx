// src/components/Contact.jsx
export default function Contact(){
return (
<section id="contact" className="py-16 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl font-bold text-accent mb-4">Contact</h2>
<p className="text-gray-300">Email: <a href="mailto:abishek17472@gmail.com" className="text-accent">abishek17472@gmail.com</a></p>
<p className="text-gray-300">Phone: +91 86101 44743</p>
<div className="mt-4 flex justify-center gap-4">
<a href="https://github.com/your-username" className="text-gray-300 hover:text-accent">GitHub</a>
<a href="https://linkedin.com/in/your-linkedin" className="text-gray-300 hover:text-accent">LinkedIn</a>
</div>
</div>
</section>
)
}