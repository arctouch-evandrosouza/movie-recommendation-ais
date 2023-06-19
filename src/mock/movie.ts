import { MovieInterface, GenreInterface, watchProvidersInterface, VideoInterface } from "../interfaces/MovieInterfaces";
import { watchProviders } from "./providers";

const rawData = [
  {
    adult: false,
    backdrop_path: "/7eccX0xay9pDj6ZQvU4cu3whw18.jpg",
    belongs_to_collection: null,
    budget: 0,
    genres: [
      { id: 16, name: "Animation" },
      { id: 14, name: "Fantasy" },
      { id: 27, name: "Horror" },
      { id: 28, name: "Action" },
      { id: 9648, name: "Mystery" },
    ],
    homepage: "",
    id: 1003579,
    imdb_id: "tt24223450",
    original_language: "en",
    original_title: "Batman: The Doom That Came to Gotham",
    overview:
      "Explorer Bruce Wayne accidentally unleashes an ancient evil, and returns to Gotham after being away for two decades. There, Batman battles Lovecraftian supernatural forces and encounters allies and enemies such as Green Arrow, Ra's al Ghul, Mr. Freeze, Killer Croc, Two-Face and James Gordon.",
    popularity: 162.791,
    poster_path: "/hrATQE8ScQceohwInaMluluNEaf.jpg",
    production_companies: [
      {
        id: 9993,
        logo_path: "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
        name: "DC Entertainment",
        origin_country: "US",
      },
      {
        id: 2785,
        logo_path: "/l5zW8jjmQOCx2dFmvnmbYmqoBmL.png",
        name: "Warner Bros. Animation",
        origin_country: "US",
      },
      {
        id: 14772,
        logo_path: "/1XTIrcpK2JgnKn1RYgsPEJiUO0k.png",
        name: "Warner Bros. Home Entertainment Group",
        origin_country: "US",
      },
    ],
    production_countries: [
      { iso_3166_1: "US", name: "United States of America" },
    ],
    release_date: "2023-03-10",
    revenue: 0,
    runtime: 86,
    spoken_languages: [
      { english_name: "English", iso_639_1: "en", name: "English" },
    ],
    status: "Released",
    tagline: "",
    title: "Batman: The Doom That Came to Gotham",
    video: false,
    vote_average: 6.642,
    vote_count: 95,
    videos: {
      results: [
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Shadows Of Gotham",
          key: "zDHRvg7ndMk",
          site: "YouTube",
          size: 1080,
          type: "Behind the Scenes",
          official: true,
          published_at: "2023-04-11T16:00:41.000Z",
          id: "6435d1fafd4f800095541f95",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Showmanship",
          key: "LFD-8Q80eNc",
          site: "YouTube",
          size: 1080,
          type: "Clip",
          official: true,
          published_at: "2023-04-07T17:00:10.000Z",
          id: "643466a23103250126985c03",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Full Movie Preview",
          key: "rIMLWMDPRtU",
          site: "YouTube",
          size: 1080,
          type: "Clip",
          official: true,
          published_at: "2023-03-28T18:00:05.000Z",
          id: "6426b99f8de0ae00f4bf3a1a",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Exclusive Clip",
          key: "PQHoxEE-AqQ",
          site: "YouTube",
          size: 1080,
          type: "Clip",
          official: true,
          published_at: "2023-03-23T20:00:08.000Z",
          id: "6421e7a353466100cd40e85e",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Trailer",
          key: "5OzP3grTnz8",
          site: "YouTube",
          size: 1080,
          type: "Trailer",
          official: true,
          published_at: "2023-01-19T17:00:00.000Z",
          id: "63c98f260398ab00cc1aeffd",
        },
      ],
    },
  },
  {
    adult: false,
    backdrop_path: "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
    belongs_to_collection: {
      id: 86311,
      name: "The Avengers Collection",
      poster_path: "/yFSIUVTCvgYrpalUktulvk3Gi5Y.jpg",
      backdrop_path: "/zuW6fOiusv4X9nnW3paHGfXcSll.jpg",
    },
    budget: 300000000,
    genres: [
      { id: 12, name: "Adventure" },
      { id: 28, name: "Action" },
      { id: 878, name: "Science Fiction" },
    ],
    homepage: "https://www.marvel.com/movies/avengers-infinity-war",
    id: 299536,
    imdb_id: "tt4154756",
    original_language: "en",
    original_title: "Avengers: Infinity War",
    overview:
      "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    popularity: 197.129,
    poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    production_companies: [
      {
        id: 420,
        logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
        name: "Marvel Studios",
        origin_country: "US",
      },
    ],
    production_countries: [
      { iso_3166_1: "US", name: "United States of America" },
    ],
    release_date: "2018-04-25",
    revenue: 2052415039,
    runtime: 149,
    spoken_languages: [
      { english_name: "English", iso_639_1: "en", name: "English" },
      { english_name: "Xhosa", iso_639_1: "xh", name: "" },
    ],
    status: "Released",
    tagline: "An entire universe. Once and for all.",
    title: "Avengers: Infinity War",
    video: false,
    vote_average: 8.259,
    vote_count: 27051,
    videos: {
      results: [
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "AVENGERS 3: Infinity War All Bonus Features & Bloopers (2018)",
          key: "_XkUdr0EDwk",
          site: "YouTube",
          size: 1080,
          type: "Featurette",
          official: false,
          published_at: "2018-08-15T16:39:38.000Z",
          id: "5ca3823292514140cf499dc5",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: '"Legacy" TV Spot',
          key: "LXPaDL_oILs",
          published_at: "2018-04-12T16:00:01.000Z",
          site: "YouTube",
          size: 1080,
          type: "Teaser",
          official: true,
          id: "5aea2ed2c3a3682bf7001205",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: '"Family" Featurette',
          key: "PbRmbhdHDDM",
          published_at: "2018-04-11T16:00:06.000Z",
          site: "YouTube",
          size: 1080,
          type: "Featurette",
          official: true,
          id: "5aea2f3e92514172a7001672",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Chant TV Spot",
          key: "5iOhzJdDawE",
          site: "YouTube",
          size: 1080,
          type: "Teaser",
          official: true,
          published_at: "2018-04-07T16:00:01.000Z",
          id: "639d42fe4f33ad00c32b8a73",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Official Trailer #2",
          key: "QwievZ1Tx-8",
          published_at: "2018-03-16T13:02:41.000Z",
          site: "YouTube",
          size: 1080,
          type: "Trailer",
          official: true,
          id: "5aabd7e69251413feb011276",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Big Game Spot",
          key: "pVxOVlm_lE8",
          published_at: "2018-02-05T02:12:09.000Z",
          site: "YouTube",
          size: 1080,
          type: "Teaser",
          official: true,
          id: "5a7833440e0a26597f010849",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Official Trailer",
          key: "6ZfuNTqbHE8",
          published_at: "2017-11-29T13:26:24.000Z",
          site: "YouTube",
          size: 1080,
          type: "Trailer",
          official: true,
          id: "5a200baa925141033608f5f0",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Fans reaction Trailer Tease",
          key: "3VbHg5fqBYw",
          published_at: "2017-11-28T17:09:22.000Z",
          site: "YouTube",
          size: 720,
          type: "Teaser",
          official: true,
          id: "5a200bdd0e0a264cca08d39f",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Action...Avengers: Infinity War",
          key: "sAOzrChqmd0",
          published_at: "2017-02-11T01:56:19.000Z",
          site: "YouTube",
          size: 720,
          type: "Clip",
          official: true,
          id: "5a200bcc925141032408d21b",
        },
      ],
    },
  },
  {
    adult: false,
    backdrop_path: "/iQJ1gC2p6yn5wnBEklhPaEFJ3n1.jpg",
    belongs_to_collection: null,
    budget: 0,
    genres: [
      { id: 16, name: "Animation" },
      { id: 28, name: "Action" },
      { id: 878, name: "Science Fiction" },
    ],
    homepage:
      "https://www.warnerbros.com/movies/batman-and-superman-battle-super-sons",
    id: 886396,
    imdb_id: "tt21197740",
    original_language: "en",
    original_title: "Batman and Superman: Battle of the Super Sons",
    overview:
      "After discovering he has powers, 11-year-old Jonathan Kent and assassin-turned-Boy-Wonder Damian Wayne must join forces to rescue their fathers (Superman & Batman) and save the planet from the malevolent alien force known as Starro.",
    popularity: 52.852,
    poster_path: "/mvffaexT5kA3chOnGxwBSlRoshh.jpg",
    production_companies: [
      {
        id: 2785,
        logo_path: "/l5zW8jjmQOCx2dFmvnmbYmqoBmL.png",
        name: "Warner Bros. Animation",
        origin_country: "US",
      },
      {
        id: 9993,
        logo_path: "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
        name: "DC Entertainment",
        origin_country: "US",
      },
    ],
    production_countries: [
      { iso_3166_1: "US", name: "United States of America" },
    ],
    release_date: "2022-10-18",
    revenue: 0,
    runtime: 79,
    spoken_languages: [
      { english_name: "English", iso_639_1: "en", name: "English" },
    ],
    status: "Released",
    tagline: "",
    title: "Batman and Superman: Battle of the Super Sons",
    video: false,
    vote_average: 7.82,
    vote_count: 200,
    videos: {
      results: [
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Watchtower",
          key: "3CRBmGS2tPM",
          site: "YouTube",
          size: 1080,
          type: "Clip",
          official: true,
          published_at: "2022-10-18T16:59:48.000Z",
          id: "634f0f03880c9200796b6e85",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Exclusive Clip",
          key: "d3dQGi7H_8U",
          site: "YouTube",
          size: 1080,
          type: "Clip",
          official: true,
          published_at: "2022-10-18T15:59:48.000Z",
          id: "634f0efbf3b49a00862327c4",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Krypto Unleashed! Exclusive Clip",
          key: "a_FmzyiLCU0",
          site: "YouTube",
          size: 1080,
          type: "Clip",
          official: true,
          published_at: "2022-10-16T22:00:01.000Z",
          id: "634cbcf368b1ea007f59975d",
        },
        {
          iso_639_1: "en",
          iso_3166_1: "US",
          name: "Trailer",
          key: "ZDPK7I5BD3g",
          site: "YouTube",
          size: 1080,
          type: "Trailer",
          official: true,
          published_at: "2022-06-30T18:45:34.000Z",
          id: "62be131be640d6005b3d195b",
        },
      ],
    },
  },
];

const getTrailer = (videos: any): VideoInterface | null => {
  const selectedVideo = videos.results.filter(
    (video: any) => video.type === "Trailer"
  );
  console.log("🚀 ~ file: movie.ts:395 ~ getTrailer ~ selectedVideo:", selectedVideo)
  if (!selectedVideo) return null;

  const video: VideoInterface = {
    key: selectedVideo[0].key,
    site: selectedVideo[0].site,
  };
  console.log("🚀 ~ file: movie.ts:402 ~ getTrailer ~ video:", video)

  return video;
};

const getWatchProvides = (movie_id: any): watchProvidersInterface[] | null => {
  if (!watchProviders) return null;
  let providers: watchProvidersInterface[] = [];
  watchProviders.results.BR.flatrate.forEach((provider: { logo_path: string; provider_name: any; }) =>
    providers.push({
      logo_path: "https://image.tmdb.org/t/p/w500" + provider.logo_path,
      provider_name: provider.provider_name,
    })
  );

  return providers;
};

//const genres: Genre[] = [{ title: "action" }, { title: "other" }];

const movies: MovieInterface[] = [];

rawData.forEach((movie) => {
  let trailer = getTrailer(movie.videos);

  movies.push({
    title: movie.original_title,
    date: movie.release_date,
    duration: movie.runtime,
    genres: movie.genres,
    description: movie.overview,
    image: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
    video: trailer,
    watchProviders: getWatchProvides(movie.id),
  });
});

export { movies };