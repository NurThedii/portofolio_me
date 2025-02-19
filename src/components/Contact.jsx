import { createElement } from "react";
import { content } from "../Content";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  return (
    <section className="bg-dark_primary text-white py-14" id="contact">
      <Toaster />
      <div className="md:container px-5">
        <div className="text-center mb-10">
          <h2 className="title !text-white" data-aos="fade-down">
            {Contact.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Contact.subtitle}
          </h4>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg text-center mb-5">
            Feel free to connect with me via the following platforms:
          </p>
          {/* Layout kolom untuk sosial media */}
          <div className="flex flex-col items-center gap-2 w-full max-w-xs">
            {Contact.social_media.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full transition duration-300 w-full justify-center"
              >
                {createElement(item.icon, { className: "text-white" })}
                <span className="font-Poppins text-white">{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
