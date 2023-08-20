import { render, screen } from "@testing-library/react";
import Card from "./card.js";

describe("Card component", () => {
  it("should render Card component correctly", () => {
    render(<Card movie={dummyMovie} />);
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();

    
    const image = screen.getByTestId("image");
    expect(image).toBeInTheDocument();

    const title = screen.getByText("Star Wars");
    expect(title).toBeInTheDocument();

    const description = screen.getByText(
      "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire."
    );
    expect(description).toBeInTheDocument();
  });
});

const dummyMovie = {
  adult: false,
  backdrop_path: "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/gq5Wi7i4SF3lo4HHkJasDV95xI9.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg",
  },
  budget: 11000000,
  genres: [
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 28,
      name: "Action",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
  ],
  homepage: "http://www.starwars.com/films/star-wars-episode-iv-a-new-hope",
  id: 11,
  imdb_id: "tt0076759",
  original_language: "en",
  original_title: "Star Wars",
  overview:
    "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
  popularity: 65.363,
  poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm Ltd.",
      origin_country: "US",
    },
    {
      id: 25,
      logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      name: "20th Century Fox",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "1977-05-25",
  revenue: 775398007,
  runtime: 121,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "A long time ago in a galaxy far, far away...",
  title: "Star Wars",
  video: false,
  vote_average: 8.204,
  vote_count: 19014,
  credits: {
    cast: [
      {
        adult: false,
        gender: 2,
        id: 2,
        known_for_department: "Acting",
        name: "Mark Hamill",
        original_name: "Mark Hamill",
        popularity: 26.546,
        profile_path: "/2ZulC2Ccq1yv3pemusks6Zlfy2s.jpg",
        cast_id: 3,
        character: "Luke Skywalker",
        credit_id: "52fe420dc3a36847f8000441",
        order: 0,
      },
      {
        adult: false,
        gender: 2,
        id: 3,
        known_for_department: "Acting",
        name: "Harrison Ford",
        original_name: "Harrison Ford",
        popularity: 29.969,
        profile_path: "/5M7oN3sznp99hWYQ9sX0xheswWX.jpg",
        cast_id: 4,
        character: "Han Solo",
        credit_id: "52fe420dc3a36847f8000445",
        order: 1,
      },
      {
        adult: false,
        gender: 1,
        id: 4,
        known_for_department: "Acting",
        name: "Carrie Fisher",
        original_name: "Carrie Fisher",
        popularity: 7.375,
        profile_path: "/utKPqWm9MAcL6NqN0Kd71dWUmXM.jpg",
        cast_id: 5,
        character: "Princess Leia Organa",
        credit_id: "52fe420dc3a36847f8000449",
        order: 2,
      },
    ],
    crew: [
      {
        adult: false,
        gender: 2,
        id: 1,
        known_for_department: "Directing",
        name: "George Lucas",
        original_name: "George Lucas",
        popularity: 24.303,
        profile_path: "/WCSZzWdtPmdRxH9LUCVi2JPCSJ.jpg",
        credit_id: "5e85e7e298f1f10014ab3e74",
        department: "Directing",
        job: "Director",
      },
      {
        adult: false,
        gender: 2,
        id: 1,
        known_for_department: "Directing",
        name: "George Lucas",
        original_name: "George Lucas",
        popularity: 24.303,
        profile_path: "/WCSZzWdtPmdRxH9LUCVi2JPCSJ.jpg",
        credit_id: "52fe420dc3a36847f800045b",
        department: "Production",
        job: "Executive Producer",
      },
    ],
  },
};
