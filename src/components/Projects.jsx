import { content } from "../Content";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 pb-10 flex flex-col">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Projects.project_content.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] flex flex-col transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
              data-aos="fade-up"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-md"
              />
              <div className="flex flex-col gap-1 mt-2">
                <h5 className="font-bold font-Poppins">{item.title}</h5>
                <p className="text-gray-600 text-sm paddin">
                  {item.description || "A brief description about the project."}
                </p>
              </div>
              {/* Tampilkan badge bahasa pemrograman jika ada */}
              {item.lang && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.lang.map((language, index) => (
                    <div
                      key={index}
                      className="pt-1 pb-2 px-5 flex items-center justify-center text-center bg-indigo-100 text-indigo-800 font-semibold rounded-full text-xs hover:scale-110 transition transform duration-300 ease-in-out"
                    >
                      {language}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
