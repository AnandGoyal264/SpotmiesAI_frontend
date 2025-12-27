import { Card, CardContent, Typography, Button, Rating, Box } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import api from "../api/api";

const SnippetCard = ({ snippet }) => {
  const { addFavorite } = useContext(AppContext);

  const rateSnippet = async (value) => {
    try {
      await api.post(`/snippets/${snippet._id}/rate`, { rating: value });
      alert("Thanks for rating!");
    } catch (err) {
      console.log(err);
      alert("Failed to submit rating");
    }
  };

  return (
    <Card sx={{ mb: 3, borderRadius: "10px", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6">{snippet.title}</Typography>

        <Typography color="text.secondary">
          {snippet.language}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          {snippet.description}
        </Typography>

        <Box
          sx={{
            background: "#111",
            color: "#0f0",
            padding: "10px",
            borderRadius: "8px",
            marginTop: "10px",
            overflowX: "auto"
          }}
        >
          <pre style={{ margin: 0 }}>{snippet.code}</pre>
        </Box>

        {/* Rating */}
        <Rating
          name="rating"
          sx={{ mt: 2, mb: 2 }}
          onChange={(e, value) => rateSnippet(value)}
        />

        {/* Favorite Button */}
        <Button
          variant="outlined"
          onClick={() => addFavorite(snippet)}
        >
          ❤️ Add Favorite
        </Button>
      </CardContent>
    </Card>
  );
};

export default SnippetCard;
