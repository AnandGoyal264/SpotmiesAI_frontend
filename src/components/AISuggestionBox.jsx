import { Card, CardContent, Typography } from "@mui/material";

const AISuggestionBox = ({ suggestion }) => {
  if (!suggestion) return null;

  return (
    <Card sx={{ mb: 3, background: "#e3f2fd" }}>
      <CardContent>
        <Typography variant="h6">🤖 AI Suggestion</Typography>
        <Typography>{suggestion}</Typography>
      </CardContent>
    </Card>
  );
};

export default AISuggestionBox;
