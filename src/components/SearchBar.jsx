import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query) return;
    onSearch(query);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
      <TextField
        fullWidth
        label="Search Code Snippets"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
