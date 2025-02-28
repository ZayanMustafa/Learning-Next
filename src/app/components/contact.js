'use client'
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_ar83c87";
    const templateID = "template_u04k21n";
    const userID = "Q5q4FN2S14mVNX7v1";

    try {
      await emailjs.send(serviceID, templateID, formData, userID);
      setStatus("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setStatus("Failed to send message. ❌");
    }
  };

  return (
    <section id="contact" className="p-10  text-white text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p>
        Email:{" "}
        <a href="mailto:mustafazayyan13@gmail.com" className="text-blue-400">
          mustafazayyan13@gmail.com
        </a>
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="mt-5 max-w-md mx-auto bg-gray-800 p-5 rounded-lg">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 mb-3 rounded bg-gray-700 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-3 rounded bg-gray-700 text-white"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 mb-3 rounded bg-gray-700 text-white"
        ></textarea>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white p-3 rounded">
          Send Message
        </button>
        {status && <p className="mt-3">{status}</p>}
      </form>
    </section>
  );
}
