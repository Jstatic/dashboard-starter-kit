var client = new Keen({
  projectId: "529f7b3ece5e431cfe000010",
  readKey: "83740031e2adc8dca547fe9abf6afa9bdbe1d52959425c915590d291d6bb28a40c11283a508de78cf7d5bd8f68017d8dedea883010ef33287324c16dc624e351b132a2022e16d8f5d58fb9c826c05c21089fdfda8f084918cc04e723435e3d120cb1cfecbf4f57302545e3c9419caaf6"
});

Keen.ready(function(){

  // ----------------------------------------
  // Pageviews Area Chart (30 days)
  // ----------------------------------------
  var spaceviews_timeline_30d = new Keen.Query("count", {
    eventCollection: "space_views",
    interval: "daily",
    timeframe: "previous_30_day"
  });
  client.draw(spaceviews_timeline_30d, document.getElementById("spaceviews-30d"), {
    chartType: "areachart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });

  // ----------------------------------------
  // Portfolio Additions (30d)
  // ----------------------------------------
  var port_add_timeline_30d = new Keen.Query("count", {
    eventCollection: "adding_space_to_portfolio",
    interval: "daily",
    timeframe: "previous_30_days"
  });
  client.draw(port_add_timeline_30d, document.getElementById("portfolioadds-30d"), {
    chartType: "areachart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });


  // ----------------------------------------
  // Pageviews Area Chart (24 hrs)
  // ----------------------------------------
  var spaceviews_timeline_24h = new Keen.Query("count", {
    eventCollection: "space_views",
    interval: "hourly",
    timeframe: "previous_24_hours"
  });
  client.draw(spaceviews_timeline_24h, document.getElementById("spaceviews-24h"), {
    chartType: "areachart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });

  // ----------------------------------------
  // Portfolio Additions (24h)
  // ----------------------------------------
  var port_add_timeline_24h = new Keen.Query("count", {
    eventCollection: "adding_space_to_portfolio",
    interval: "hourly",
    timeframe: "previous_24_hours"
  });
  client.draw(port_add_timeline_24h, document.getElementById("portfolioadds-24h"), {
    chartType: "areachart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });


  // ----------------------------------------
  // Pageviews Pie Chart (24hrs)
  // ----------------------------------------
  var spaceviews_pie_24h = new Keen.Query("count", {
    eventCollection: "space_views",
    groupBy: "space_id",
    timeframe: "previous_24_hours"
  });
  client.draw(spaceviews_pie_24h, document.getElementById("spaceviews-by-space-24h"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      }
    }
  });

  // ----------------------------------------
  // Pageviews Pie Chart (24hrs)
  // ----------------------------------------
  var spaceviews_pie_24h = new Keen.Query("count", {
    eventCollection: "space_views",
    groupBy: "user_id",
    timeframe: "previous_24_hours"
  });
  client.draw(spaceviews_pie_24h, document.getElementById("spaceviews-by-user-24h"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      }
    }
  });




  // ----------------------------------------
  // Spaces added to portfolio by Space
  // ----------------------------------------
  var port_add_pie = new Keen.Query("count", {
    eventCollection: "adding_space_to_portfolio",
    timeframe: "previous_24_hours",
    groupBy: "space_id"
  });
  client.draw(port_add_pie, document.getElementById("portfolioadds-by-space-24hs"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      }
    }
  });

  // ----------------------------------------
  // Spaces added to portfolio by User
  // ----------------------------------------
  var port_add_pie = new Keen.Query("count", {
    eventCollection: "adding_space_to_portfolio",
    timeframe: "previous_24_hours",
    groupBy: "user_id"
  });
  client.draw(port_add_pie, document.getElementById("portfolioadds-by-user-24hs"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      }
    }
  });




});
