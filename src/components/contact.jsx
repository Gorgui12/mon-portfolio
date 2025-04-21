import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactSection from "./animationsSection/contactSection";

function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oeqwadr", // Remplace par ton Service ID
        "template_ozgdtzv", // Remplace par ton Template ID
        formRef.current,
        "xNdDuT4xSnPyBpu11" // Remplace par ta Public Key EmailJS
      )
      .then((response) => {
        console.log("E-mail envoyé avec succès !", response.status, response.text);
        setStatus("Votre message a bien été envoyé !");
        setFormData({ name: "", email: "", number: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("Erreur lors de l'envoi :", err);
        setStatus(`Une erreur est survenue : ${err.text || "Réessayez plus tard."}`);
      });
  };

  return (
    //<div className="bg-[#1b445c] w-full min-h-[80vh] flex flex-col items-center justify-around p-8 transition ease-in-out duration-1000">
      <ContactSection>
      <h3 className="mb-4 text-xl font-bold text-white">
        Me <span className="text-cyan-400">Contacter</span>
      </h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-4xl flex flex-col items-center space-y-6"
      >
        <div className="w-full flex flex-wrap gap-4 justify-evenly">
          <input
            type="text"
            placeholder="Prénom et Nom"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-[45%] min-w-[250px] p-2 text-lg rounded-lg border border-black"
          />
          <input
            type="email"
            placeholder="Adresse Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-[45%] min-w-[250px] p-2 text-lg rounded-lg border border-black"
          />
          <input
            type="tel"
            placeholder="Numéro Téléphone (optionnel)"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-[45%] min-w-[250px] p-2 text-lg rounded-lg border border-black"
          />
          <input
            type="text"
            placeholder="Objet"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-[45%] min-w-[250px] p-2 text-lg rounded-lg border border-black"
          />
        </div>

        <textarea
          placeholder="Votre Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-[95%] min-w-[250px] max-w-[95%] min-h-[5rem] max-h-[10rem] h-32 p-3 text-lg rounded-lg border border-black"
        ></textarea>

        {/* Champs cachés pour EmailJS */}
        <input type="hidden" name="user_name" value={formData.name} />
        <input type="hidden" name="user_email" value={formData.email} />
        <input type="hidden" name="user_number" value={formData.number} />
        <input type="hidden" name="user_subject" value={formData.subject} />
        <input type="hidden" name="user_message" value={formData.message} />

        <button
          type="submit"
          className="w-[95%] max-w-[500px] p-4 text-lg rounded-full bg-cyan-400 text-black hover:bg-cyan-300 active:bg-emerald-400 transform active:scale-95 transition duration-300"
        >
          Envoyer
        </button>
      </form>

      {status && <p className="text-white mt-4 text-center">{status}</p>}
      </ContactSection>
    //</div>
  );
}

export default Contact;


/*import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "", // Correction: "objet" devient "subject"
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oeqwadr", // Remplace par ton Service ID
        "template_ozgdtzv", // Remplace par ton Template ID
        formRef.current,
        "xNdDuT4xSnPyBpu11" // Remplace par ta Public Key EmailJS
      )
      .then((response) => {
        console.log("E-mail envoyé avec succès !", response.status, response.text);
        setStatus("Votre message a bien été envoyé !");
        setFormData({ name: "", email: "", number: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("Erreur lors de l'envoi :", err);
        setStatus(`Une erreur est survenue : ${err.text || "Réessayez plus tard."}`);
      });
  };

  return (
    <div className="main-contact">
      <h3>
        Me <span style={{ color: "cyan" }}>Contacter</span>
      </h3>
      <form ref={formRef} onSubmit={handleSubmit} className="form">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Prénom et Nom"
            value={formData.name}
            name="name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Adresse Email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            placeholder="Numéro Téléphone (optionnel)"
            value={formData.number}
            name="number"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Objet"
            value={formData.subject}
            name="subject"
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          placeholder="Votre Message"
          value={formData.message}
          name="message"
          onChange={handleChange}
          className="textarea"
          required
        ></textarea>

        {// Ajout d'inputs cachés pour correspondre aux variables EmailJS }
        <input type="hidden" name="user_name" value={formData.name} />
        <input type="hidden" name="user_email" value={formData.email} />
        <input type="hidden" name="user_number" value={formData.number} />
        <input type="hidden" name="user_subject" value={formData.subject} />
        <input type="hidden" name="user_message" value={formData.message} />

        <button type="submit" className="btn-submit">
          Envoyer
        </button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
}

export default Contact;

*/