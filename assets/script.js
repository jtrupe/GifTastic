var giphyURL = "https://api.giphy.com/v1/gifs/search?q=";
var apiKey = "8MDlERoDZR0WwoC6kpJoFsZ172PuBJCw";

var topic = "";
var topicsArr = ["soccer", "music", "cars", "games"];

renderButtons();

$("#addButton").on("click", function () {
    event.preventDefault();
    topic = $("#topic-input").val().trim();
    topicsArr.push(topic);
    renderButtons();
    $("#topic-input").val("");
})

$(document).on("click" , ".gif", function(){
    console.log("click");
})

$(document).on("click", ".topic-btn", function () {
    queryTopic = $(this).attr("data-name");
    var queryURL = giphyURL + queryTopic + "&limit=10&api_key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var topicDiv = $("<div>");
        topicDiv.attr("data-name", queryTopic);
        for (var i = 0; i < 10; i++) {
            var gifDiv = $("<div>");
            gifDiv.attr( "id" , queryTopic + "-" + i) ;
            var rating = response.data[i].rating;
            var GIF = $("<img>");
            GIF.attr("src" , response.data[i].images.fixed_height.url);
            GIF.attr("class" , "gif");
            $("#viewGifs").append(gifDiv);
            gifDiv.append("<h2> Rated: " + rating + "</h2>");
            gifDiv.append(GIF);
            $("#viewGifs").prepend(gifDiv);              
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
