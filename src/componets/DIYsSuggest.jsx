import { useState } from "react";
import axios from "axios";

const DIYSuggest = () => {
  const [materials, setMaterials] = useState("");
  const [diySuggestions, setDIYSuggestions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend
      const response = await axios.post("/api/suggest-diy", {
        materials: materials.split(","),
      });

      // Update state with the received DIY suggestions
      setDIYSuggestions(response.data.diySuggestions);
    } catch (error) {
      console.error("Error:", error);
      // Handle errors
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter materials separated by commas"
          value={materials}
          onChange={(e) => setMaterials(e.target.value)}
        />
        <button type="submit block my-5">Get DIY Suggestionsss</button>
      </form>

      <ul>
        {diySuggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default DIYSuggest;
