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
};

