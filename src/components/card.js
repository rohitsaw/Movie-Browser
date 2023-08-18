import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 270, borderRadius: 4, boxShadow: 3 }}>
      <CardActionArea onClick={() => navigate(`/movies/${movie.id}`)}>
        <CardMedia>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="movie thumbnail"
          />
        </CardMedia>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle1" component="div" noWrap>
              {movie.title}
            </Typography>
            <Rating name="read-only" value={movie.vote_average} readOnly />
          </Box>

          <Typography
            variant="body1"
            color="text.secondary"
            noWrap
            style={{ textOverflow: "ellipsis" }}
          >
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
