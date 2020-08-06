var events = [
  {
    Date: new Date(2020, 7, 7),
    Title: " Garou 21 Pm",
  },

  {
    Date: new Date(2020, 7, 8),
    Title:
      " Breakers Revenge 2 Am<br />  Umineko Revenge 2:30 Am <br /> Jojos 22 Pm<br /> Dengeki Bynko 23Pm <br /> Mahjong Soul 23Pm <br /> Fighting EX Layer 24Pm ",
  },
  {
    Date: new Date(2020, 7, 9),
    Title: " Samurai Shodown V Special  15Pm<br /> Guilty Gear #Reload 22Pm ",
  },
  {
    Date: new Date(2020, 7, 14),
    Title:
      " BlazBlue: Central Fiction 03 Am<br /> Vampire Savior  03:30 Am<br /> Melty Blood: Actress Again Current Code 4 Am<br /> Fight of Animals 6 Am<br /> ",
  },
  {
    Date: new Date(2020, 7, 15),
    Title:
      " Nitroplus Blasterz 22 Pm<br /> Vampire Savior  22 Pm<br /> BlazBlue: Central Fiction 23 Pm<br />",
  },

  {
    Date: new Date(2020, 7, 16),
    Title:
      "  Windjammers 17 Pm<br /> BlazBlue: Central Fiction Sat 23 Pm<br />",
  },

  {
    Date: new Date(2020, 7, 21),
    Title: "  Nitroplus Blasterz 10 Am",
  },
  {
    Date: new Date(2020, 7, 22),
    Title:
      " Fight of Animals Sat 01:00 Am<br />  BlazBlue Cross Tag Battle 20 Pm<br /> Hisoutensoku 20 Pm<br />   Ultra Fight da! Kyanta 2 21 Pm<br /> Fantasy Strike  22 Pm<br /> BlazBlue: Central Fiction  01 Am<br />",
  },
  {
    Date: new Date(2020, 7, 23),
    Title: " BlazBlue Cross Tag Battle 23 pm",
  },

  {
    Date: new Date(2020, 7, 28),
    Title: " BlazBlue: Central Fiction  19Pm",
  },
  {
    Date: new Date(2020, 7, 29),
    Title:
      "Million Arthur 03:00 Am<br/>Weiss Schwarz 18 Pm<br/>Eternal Fighter Zero 20 Pm<br/>Melty Blood 22 Pm ",
  },

  {
    Date: new Date(2020, 7, 30),
    Title:
      " BlazBlue: Central Fiction  01:00 Am <br />  Guilty Gear Accent Core +R  21 Pm",
  },

  {
    Date: new Date(2020, 7, 31),
    Title: " BlazBlue: Central Fiction  04 Am ",
  },
];
var settings = {
  Color: "#ffff", //(string - color) font color of whole calendar.
  LinkColor: "#00000", //(string - color) font color of event titles.
  NavShow: false, //(bool) show navigation arrows.
  NavVertical: false, //(bool) show previous and coming months.
  NavLocation: "#foo", //(string - element) where to display navigation, if not in default position.
  DateTimeShow: true, //(bool) show current date.
  DateTimeFormat: "mmm, yyyy", //(string - dateformat) format previously mentioned date is shown in.
  DatetimeLocation: "", //(string - element) where to display previously mentioned date, if not in default position.
  EventClick: null, //(function) a function that should instantiate on the click of any event. parameters passed in via data link attribute.
  EventTargetWholeDay: false, //(bool) clicking on the whole date will trigger event action, as opposed to just clicking on the title.
  //DisabledDays: [], //(array of numbers) days of the week to be slightly transparent. ie: [1,6] to fade Sunday and Saturday.
  //ModelChange: model, //(array of objects) new data object to pass into calendar (serving suggestion: passing through only the currently selected month's events if working with large dataset.
};
var element = document.getElementById("caleandar");
caleandar(element, events, settings);
