import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { contactData } from "../../data/contact";
import Section from "./Section";

const Contact = () => {
  return (
    <Section
      id="contact"
      eyebrow="Contacto"
      title={contactData.title}
    >
      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-10 md:px-10">
        <p className="max-w-2xl leading-8 text-slate-400">
          {contactData.description}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${contactData.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            <FaEnvelope />
            Escribirme
          </a>

          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href={contactData.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;