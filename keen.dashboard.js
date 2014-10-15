var client = new Keen({
  projectId: "529f7b3ece5e431cfe000010",
  readKey: "83740031e2adc8dca547fe9abf6afa9bdbe1d52959425c915590d291d6bb28a40c11283a508de78cf7d5bd8f68017d8dedea883010ef33287324c16dc624e351b132a2022e16d8f5d58fb9c826c05c21089fdfda8f084918cc04e723435e3d120cb1cfecbf4f57302545e3c9419caaf6"
});

Keen.ready(function(){

  // ----------------------------------------
  // Total Space Views (30 days)
  // ----------------------------------------
    var count = new Keen.Query("count", {
      eventCollection: "space_views",
      timeframe: "this_30_days"
    });
    client.draw(count, document.getElementById("spaceviews-metric-30d"), {
      chartType: "metric",
      title: "Space Views (30d)",
      colors: ["#49c5b1"]
    });

  // ----------------------------------------
  // Total Space Views (24 hrs)
  // ----------------------------------------
    var count = new Keen.Query("count", {
      eventCollection: "space_views",
      timeframe: "this_24_hours"
    });
    client.draw(count, document.getElementById("spaceviews-metric-24h"), {
      chartType: "metric",
      title: "Space Views (24h)",
      colors: ["#49c5b1"]
    });

  // ----------------------------------------
  // Portolio Adds (30 days)
  // ----------------------------------------
    var count = new Keen.Query("count", {
      eventCollection: "adding_space_to_portfolio",
      timeframe: "this_30_days"
    });
    client.draw(count, document.getElementById("portfolioadds-metric-30d"), {
      chartType: "metric",
      title: "Total Spaces Added to Portfolios (30d)",
      colors: ["#49c5b1"]
    });

  // ----------------------------------------
  // Portfolio Adds (24 hrs)
  // ----------------------------------------
    var count = new Keen.Query("count", {
      eventCollection: "adding_space_to_portfolio",
      timeframe: "this_24_hours"
    });
    client.draw(count, document.getElementById("portfolioadds-metric-24h"), {
      chartType: "metric",
      title: "Total Spaces Added to Portfolios (24h)",
      colors: ["#49c5b1"]
    });


  // ----------------------------------------
  // Pageviews Area Chart (30 days)
  // ----------------------------------------
  var spaceviews_timeline_30d = new Keen.Query("count", {
    eventCollection: "space_views",
    interval: "daily",
    timeframe: "this_30_day"
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
    timeframe: "this_30_days"
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
    timeframe: "this_24_hours"
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
    timeframe: "this_24_hours"
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
    timeframe: "this_24_hours"
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
    timeframe: "this_24_hours"
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
    timeframe: "this_24_hours",
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
    timeframe: "this_24_hours",
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
