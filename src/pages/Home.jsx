import { useState } from "react";
import api from "../api/api";
import SearchBar from "../components/SearchBar";
import SnippetCard from "../components/SnippetCard";
import AISuggestionBox from "../components/AISuggestionBox";
import { Container, Typography } from "@mui/material";

const Home = () => {
  const [results, setResults] = useState([]);
  const [aiSuggestion, setAISuggestion] = useState("");

  const handleSearch = async (query) => {
    const res = await api.get(`/snippets/search?q=${query}`);

    setResults(res.data.results);
    setAISuggestion(res.data.aiSuggestion);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        🔍 Spotmies AI Code Search
      </Typography>

      <SearchBar onSearch={handleSearch} />

      <AISuggestionBox suggestion={aiSuggestion} />

      {results.map((s) => (
        <SnippetCard key={s._id} snippet={s} />
      ))}
    </Container>
  );
};

export default Home;
