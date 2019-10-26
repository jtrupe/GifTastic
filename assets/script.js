<<<<<<< HEAD
var giphyURL = "https://api.giphy.com/v1/gifs/search"
var apiKey = "8MDlERoDZR0WwoC6kpJoFsZ172PuBJCw"

$.ajax({
    url: giphyURL +"&q=cars" + "&api_key=" + apiKey,
    method: "GET"
}).then(function(response){
    console.log(response);
})
=======
var giphyURL = "https://api.giphy.com/v1/gifs/search?q=";
var apiKey = "8MDlERoDZR0WwoC6kpJoFsZ172PuBJCw";

var topic = "";
var topicsArr = ["soccer", "music", "cars", "games"];

renderButtons();

$("#addButton").on("click", function () {
    event.preventDefault();
    topic = $("#topic-input").val().trim();
    $("#topic-input").html("");
    topicsArr.push(topic);
    console.log(topicsArr);
    renderButtons();
})

$(document).on("click", ".topic-btn", function () {
    queryTopic = $(this).attr("data-name");
    console.log(queryTopic);
    console.log()
    var queryURL = giphyURL + queryTopic + "&limit=10&api_key=" + apiKey;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var topicDiv = $("<div>");
        topicDiv.attr("data-name", queryTopic);
        console.log(response.data[0].rating);
        for (var i = 0; i < 10; i++) {
            var gifDiv = $("<div>");
            gifDiv.attr( "id" , queryTopic + "-" + i) ;
            var rating = response.data[i].rating;
            var GIF =  resposne.data[i].url;
            
        }
    })
})

function renderButtons() {
    $(".buttons").empty();
    for (var i = 0; i < topicsArr.length; i++) {
        var topicButton = $("<button>");
        topicButton.attr("class", "topic-btn");
        topicButton.attr("data-name", topicsArr[i]);
        topicButton.text(topicsArr[i]);
        $(".buttons").append(topicButton);
    }
}
>>>>>>> 0f35127855626e42749cef07b7c921fb168e5039
