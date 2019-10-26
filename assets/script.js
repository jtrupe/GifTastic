var giphyURL = "https://api.giphy.com/v1/gifs/search"
var apiKey = "8MDlERoDZR0WwoC6kpJoFsZ172PuBJCw"

$.ajax({
    url: giphyURL +"&q=cars" + "&api_key=" + apiKey,
    method: "GET"
}).then(function(response){
    console.log(response);
})