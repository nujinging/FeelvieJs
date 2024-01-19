const request = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
    params: {
        api_key: 'c4ae41a953fc79fbf5c13a2d958dfe46',
        language: 'ko-KR',
    }
})

const movieApi = {
  nowPlaying: () => request.get(`movie/now_playing`),
  detail: (type, id) => request.get(`/${type}/${id}`),
};
