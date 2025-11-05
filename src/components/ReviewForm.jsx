import { useState } from "react";
import axios from "axios";

function ReviewForm({ movieId, onReviewAdded }) {
  const [name, setName] = useState("");
  const [vote, setVote] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`http://localhost:3001/api/movies/${movieId}/review`, {
        name,
        vote: parseInt(vote),
        text,
      });

      // Pulisci il form
      setName("");
      setVote("");
      setText("");

      // Aggiorna la lista recensioni nel componente genitore
      if (onReviewAdded) onReviewAdded(response.data);

    } catch (err) {
      console.error("Errore nel salvataggio recensione:", err);
      setError("Errore nell'invio della recensione. Riprova più tardi.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form space-y-3 mt-6">
      <h3 className="text-lg font-semibold">Lascia una recensione</h3>

      <input
        type="text"
        placeholder="Digita qui il tuo nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full border p-2 rounded"
        required
      />

      <select
        value={vote}
        onChange={(e) => setVote(e.target.value)}
        className="block w-full border p-2 rounded"
        required
      >
        <option value="">Voto</option>
        <option value="1">1 - Fa schifo</option>
        <option value="2">2 - Meh</option>
        <option value="3">3 - Decente</option>
        <option value="4">4 - Buono</option>
        <option value="5">5 - Capolavoro</option>
      </select>

      <textarea
        placeholder="Scrivi la tua recensione..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="block w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Invia recensione
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}

export default ReviewForm;
