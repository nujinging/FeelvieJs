const request = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: "",
    language: "ko-KR",
  },
});

const movieApi = {
  nowPlaying: type => request.get(`${type}/now_playing`),
  popular: type => request.get(`${type}/popular`),
  today: (type, time_window) => request.get(`trending/${type}/${time_window}`),
  detail: (type, id) => request.get(`${type}/${id}`),
  social: (type, id) => request.get(`${type}/${id}/external_ids`),
  credits: (type, id) => request.get(`${type}/${id}/credits`),
  recommend: (type, id) => request.get(`${type}/${id}/recommendations`),
  mediaImg: (type, id) =>
    request.get(`${type}/${id}/images?&language=fr&include_image_language=fr,null,kr`),
  mediaVid: (type, id) =>
    request.get(`${type}/${id}/videos?&language=fr&include_image_language=fr,null,kr`),
};

