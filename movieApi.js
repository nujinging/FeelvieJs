$.ajax({
    type: "get",
    url: `https://api.themoviedb.org/3/`,
    dataType: "json",
}).done((success) => {
    console.log(success);
    if (success.code == 1) {
        alert('1')
    }
})
    .fail((err) => {
        console.log(err)
    })


const movieApi = {
    nowPlaying : request.get(`movie/now_playing?api_key=`),
}