$(document).ready(function() {
  "use strict";

  /* Navigation Tabs - Show and Hide 
     ================================== */
  $("#twitchTabs a").on("click", function(e) {
    e.preventDefault();
    if (!$(this).hasClass("active")) {
      $(".tab-pane").removeClass("active");
      $(".tab-pane").addClass("hide");
      $(this).tab("show");
    }
  });
  /* END Navigation Tabs - Show and Hide */

  /* Search Streamer Function 
     ================================== */
  $("#search").on("keyup", function() {
    const value = $(this)
      .val()
      .toLowerCase();
    $(".tab-pane .col-8").filter(function() {
      $(this)
        .parent()
        .toggle(
          $(this)
            .text()
            .toLowerCase()
            .indexOf(value) > -1
        );
    });
  });
  /*  END Search Streamer Function */

  /* Populate Streamer
     ================================== */

  /* List of Streamers */
  const streamers = [
    "bcnfighters",
    "Sacred_Azure",
    "lisdexico",
    "gambatiubo",
    "jaorcas",
    "blueken",
    "lgr777",
    "faisaldante",
    "enprava",
    "medavid",
    "rimperk1",
    "Thalandyr",
    "shanksfgc",
    "apiChannelData",
    "bazoukha2x",
    "2XBCN",
  ];
  let api = "";
  var apiChannelData = [];
  /* Iterating thru list */
  streamers.forEach((streamer) => {
    api = fetch(
      "https://api.twitch.tv/helix/search/channels?query=" +
        streamer +
        "&token=twf2yfqq6qgl1l5heghz6b3nz57zcz",
      {
        headers: {
          "Client-ID": "wiigcdymn306y0db5x29f8do8o60ho",
          Accept: "application/vnd.twitchtv.v5+json",
          Authorization: "Bearer twf2yfqq6qgl1l5heghz6b3nz57zcz",
        },
      }
    )
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        fetch("https://api.twitch.tv/helix/games?id=" + resp.data[0].game_id, {
          headers: {
            "Client-ID": "wiigcdymn306y0db5x29f8do8o60ho",
            Accept: "application/vnd.twitchtv.v5+json",
            Authorization: "Bearer twf2yfqq6qgl1l5heghz6b3nz57zcz",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            var htmlContent =
              "<div class='row'><div class='col-2'><img src='" +
              resp.data[0].thumbnail_url +
              "'></div><div class='col-8'><a target='_blank' href='" +
              "http://twitch.tv/" +
              resp.data[0].display_name.toLowerCase() +
              "'>";

            /* If Streamer is Online */
            if (resp.data[0].is_live != false) {
              htmlContent +=
                "<h5>" +
                resp.data[0].display_name +
                "<span>LIVE</span></h5> <h6>" +
                json.data[0].name +
                "</h6></a><h6>Title: " +
                resp.data[0].title +
                "</h6></div><div class='col-2'><div class='circle-active'></div></div></div>";
              $("#online").append(htmlContent);
              $("#all").append(htmlContent);
            } else {
              /* If Streamer is Offline */
              htmlContent +=
                "<h5>" +
                resp.data[0].display_name +
                "</h5></a><h6>Last Stream: " +
                resp.data[0].is_live +
                "</h6></div><div class='col-2'><div class='circle'></div></div></div>";
              $("#offline").append(htmlContent);
              $("#all").append(htmlContent);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  /* END Populate Streamer */
});
