import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Container, Typography, Button } from "@mui/material";

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(AppContext);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        ❤️ Favorite Snippets
      </Typography>

      {favorites.length === 0 && (
        <Typography>No favorites yet.</Typography>
      )}

      {favorites.map((s) => (
        <div key={s._id} style={{ marginBottom: "20px" }}>
          <h3>{s.title}</h3>
          <pre style={{ background: "#111", color: "#0f0", padding: 10 }}>
{ s.code }
          </pre>
          <Button
            variant="outlined"
            color="error"
            onClick={() => removeFavorite(s._id)}
          >
            Remove
          </Button>
        </div>
      ))}
    </Container>
  );
};

export default Favorites;
