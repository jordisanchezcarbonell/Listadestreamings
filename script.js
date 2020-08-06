$(document).ready(function() {
  "use strict";
  console.log("activate");
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
    "bazoukha2x",
    "2XBCN",
    "Chottin",
    "juanmanova2",
    "rivarsal",
    "jade_fg",
    "adrianfgc",
    "abyz_dk",
    "unoquepasa",
    "saanchuck",
    "kaiserxavier",
    "byJacka",
    "saanchuck",
    "tomylebeau",
    "monoborracho",
    "lmaoncio",
    "caipermg",
    "sentinelatekken",
    "RockShooter95",
    "tkdog_",
    "swagfixiado",
    "skollev",
    "pepinozombi",
    "yuffie___",
    "tekkenkawaii",
    "Arianxa92",
    "wolfangomg",
    "cokonute",
    "fgcasturias",
    "hakaishindbfz",
    "UchihaJorg",
    "k3v1n_tv",
    "zawarudo_smash",
    "stormrevenge89",
    "berserker_zgz",
    "disidentesdeldramaqueen",
    "sb_juanan",
  ];
  let api = "";
  var contadorelemento = document.getElementById("contador");
  var contadoronline = document.getElementById("contadorONLINE");
  var contadoroffline = document.getElementById("contadorOFFLINE");
  var contadortotalonlne = 0;
  var contadorofline = 0;

  if (contadorelemento) {
    contadorelemento.innerHTML = streamers.length;
  }
  var apiChannelData = [];
  /* Iterating thru list */
  streamers.forEach((streamer, index) => {
    fetch(
      `https://api.twitch.tv/helix/search/channels?query=${streamer}&token=twf2yfqq6qgl1l5heghz6b3nz57zcz`,
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
              contadortotalonlne++;

              htmlContent +=
                "<h5>" +
                resp.data[0].display_name +
                "<span>LIVE</span></h5> <h6>" +
                json.data[0].name +
                "</h6></a><h6>Title: " +
                resp.data[0].title +
                "</h6></div><div class='col-2 margenesaautodiv'> <div class='circle-active'> <a href='https://twitter.com/intent/tweet?text=Estoy%20viendo%20a%20http://twitch.tv/" +
                resp.data[0].display_name.toLowerCase() +
                "' target='_blank' class='paraellogodetwitter'><i class='fab fa-twitter fa-2x'></i>            </a></div>    </div> </div> ";
              $("#online").append(htmlContent);
              $("#all").append(htmlContent);
            } else {
              contadorofline++;

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
            if (contadoronline) {
              contadoronline.innerHTML = contadortotalonlne;
            }
            if (contadoroffline) {
              contadoroffline.innerHTML = contadorofline;
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

var countDownDate = new Date("Aug 7 , 2020 24:00:00").getTime();
//var countDownDate = new Date("Aug 4, 2020 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "AnimeEvo";
    document.getElementById("demo").href = "./animeEvo.html";
  }
}, 1000);
function Download(url) {
  document.getElementById("my_iframe").src = "./Extension Opera.zip";
}
