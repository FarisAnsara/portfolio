import React from "react";
import Header from "../components/Header";
import BodyText from "../components/BodyText";

const ContactPage = ({isHome=false}) => {
  const header = <Header title="Get in Touch" className={`text-center ${isHome?' pt-8':'pt-28'}`} />;
  return (
    <section className="flex flex-col justify-center gap-6 items-center pb-6">
      {header}
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <form
          action="https://formspree.io/f/mwpknyqr" // Replace with your Formspree link or server endpoint
          method="POST"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm text-gray-400">
              <BodyText bodyText='Name' />
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
          <label htmlFor="email" className="block text-sm text-gray-400">
              <BodyText bodyText='Email' />
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
          <label htmlFor="message" className="block text-sm text-gray-400">
              <BodyText bodyText='Message' />
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="mt-2 w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg transition-all"
          >
            <BodyText bodyText='Send Message' />
          </button>
        </form>
      </div>

      {/* Additional Contact Info */}
      <div className="mt-6 text-center">
        <p className={BodyText}>
          Or reach out directly at:{" "}
          <a href="mailto:faris.ansara@gmail.com" className="text-cyan-400 hover:text-cyan-300">
            faris.ansara@gmail.com
          </a>
          {" "} or through {" "}
          <a href="https://www.linkedin.com/in/faris-ansara-173663255" className="text-cyan-400 hover:text-cyan-300">
            LinkedIn
          </a>
        </p>
        <p className={BodyText}>
          Call me at:{" "} 
          <a href="tel:+447908918539" className="text-cyan-400 hover:text-cyan-300">
            +447908918539
          </a>
          {" "} or {" "}
          <a href="tel:+962795095655" className="text-cyan-400 hover:text-cyan-300">
            +962795095655
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
