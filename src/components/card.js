import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ProgressiveImg from "./progressiveImg";

export default function MovieCard({ movie }) {
  return (
    <Card
      data-testid="card"
      className="card"
      sx={{ borderRadius: 4, boxShadow: 3 }}
    >
      <CardMedia>
        <ProgressiveImg
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="movie thumbnail"
        />
      </CardMedia>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" component="div" noWrap>
            {movie.title}
          </Typography>
          <Rating
            name="read-only"
            value={Number(movie.vote_average) / 2}
            readOnly
          />
        </Box>

        <Typography
          variant="body1"
          color="text.secondary"
          noWrap
          style={{ textOverflow: "ellipsis" }}
        >
          {movie.overview ?? "N/A"}
        </Typography>
      </CardContent>
    </Card>
  );
}
