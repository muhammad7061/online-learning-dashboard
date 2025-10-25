import { Code2, Globe, Layout, Rocket } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6 flex items-center">
      <div className="max-w-[80%] mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          About the Online Learning Dashboard
        </h1>
        <p className="text-gray-700 text-lg mb-10">
          This is my <span className="font-semibold">Final Frontend Development Project</span>,
          built using React.js, Tailwind CSS, JavaScript, and HTML/CSS.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-10">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4 text-blue-600">
              <Layout size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clean UI Design</h3>
            <p className="text-gray-600">
              Designed with Tailwind CSS for readability and professional dashboard experience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4 text-blue-600">
              <Code2 size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Frontend Stack</h3>
            <p className="text-gray-600">
              Built with React.js and Vite for fast development and smooth performance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4 text-blue-600">
              <Globe size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
            <p className="text-gray-600">
              Features a dynamic course listing, enrollment system, and mock authentication.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-blue-600 text-white py-10 px-6 rounded-2xl shadow-lg">
          <div className="flex flex-col items-center">
            <Rocket className="mb-3" size={36} />
            <h2 className="text-2xl font-semibold mb-2">Project Goals</h2>
            <p className="max-w-2xl text-gray-100">
              Demonstrate a responsive, interactive web application including routing,
              state management, reusable components, and modern UI libraries.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">Technologies Used</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React.js", "Vite", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        <div className="mt-16 text-gray-600">
          <p>
            Created by <span className="font-semibold text-blue-700">Mohamed Ali Ahmed</span>.
          </p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} OLMS Dashboard Project</p>
        </div>
      </div>
    </section>
  );
};

export default About;