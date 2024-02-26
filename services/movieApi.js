const request = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: "",
    language: "ko-KR",
  },
});

const movieApi = {
  nowPlaying: (type) => request.get(`${type}/now_playing`),
  popular: (type) => request.get(`${type}/popular`),
  today: (type, time_window) => request.get(`trending/${type}/${time_window}`),
  detail: (type, id) => request.get(`${type}/${id}`),
  social: (type, id) => request.get(`${type}/${id}/external_ids`),

  genreTitle : (type) => request.get(`genre/${type}/list`),
  genreList : (type, genre_number) => request.get(`discover/${type}?with_genres=${genre_number}&sort_by=popularity.desc`),
  genreScroll: (type, genre_number, page) => request.get(`discover/${type}?with_genres=${genre_number}&page=${page}`),
};

