const request = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
    params: {
        api_key: '',
        language: 'ko-KR',
    }
})

const movieApi = {
    nowPlaying : () => request.get(`movie/now_playing`),
    popular : () => request.get(`movie/popular`),
    detail: () => request.get(`movie/now_playing`),
};

