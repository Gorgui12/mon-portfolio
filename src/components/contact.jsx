import React, { useState, useRef } from "react";
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

        {/* Ajout d'inputs cachés pour correspondre aux variables EmailJS */}
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
