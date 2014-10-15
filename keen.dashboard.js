var client = new Keen({
    projectId: "529f7b3ece5e431cfe000010",
    readKey: "83740031e2adc8dca547fe9abf6afa9bdbe1d52959425c915590d291d6bb28a40c11283a508de78cf7d5bd8f68017d8dedea883010ef33287324c16dc624e351b132a2022e16d8f5d58fb9c826c05c21089fdfda8f084918cc04e723435e3d120cb1cfecbf4f57302545e3c9419caaf6"
});

Keen.ready(function() {

    //
    // -- CONSTANTS
    //
    var areaChartOptions = {
        chartArea: {
            height: "85%",
            left: "5%",
            top: "5%",
            width: "80%"
        }
    };

    var pieChartOptions = {
        chartArea: {
            height: "85%",
            left: "5%",
            top: "5%",
            width: "100%"
        }
    };

    var SPACE_VIEWS = "space_views";
    var ADDING_SPACE_TO_PORT = "adding_space_to_portfolio";
    var USER_ID = "user_id";
    var SPACE_ID = "space_id";
    var THIS_30_DAYS = "this_30_days";
    var THIS_24_HRS = "this_24_hours";
    //
    // -- END CONSTANTS
    //

    // ----------------------------------------
    // Total Space Views (30 days)
    // ----------------------------------------
    var count = new Keen.Query("count", {
        eventCollection: SPACE_VIEWS,
        timeframe: THIS_30_DAYS
    });
    client.draw(count, document.getElementById("spaceviews-metric-30d"), {
        chartType: "metric",
        title: "Spaces Viewed in Last 30 Days",
        colors: ["#49c5b1"]
    });

    // ----------------------------------------
    // Total Space Views (24 hrs)
    // ----------------------------------------
    var count = new Keen.Query("count", {
        eventCollection: SPACE_VIEWS,
        timeframe: THIS_24_HRS
    });
    client.draw(count, document.getElementById("spaceviews-metric-24h"), {
        chartType: "metric",
        title: "Spaces Viewed in Last 24 Hours",
        colors: ["#49c5b1"]
    });

    // ----------------------------------------
    // Portolio Adds (30 days)
    // ----------------------------------------
    var count = new Keen.Query("count", {
        eventCollection: ADDING_SPACE_TO_PORT,
        timeframe: THIS_30_DAYS
    });
    client.draw(count, document.getElementById("portfolioadds-metric-30d"), {
        chartType: "metric",
        title: "Spaces Added to Portfolios During Last 30 Days",
        colors: ["#49c5b1"]
    });

    // ----------------------------------------
    // Portfolio Adds (24 hrs)
    // ----------------------------------------
    var count = new Keen.Query("count", {
        eventCollection: ADDING_SPACE_TO_PORT,
        timeframe: THIS_24_HRS
    });
    client.draw(count, document.getElementById("portfolioadds-metric-24h"), {
        chartType: "metric",
        title: "Spaces Added to Portfolios During Last 24 Hours",
        colors: ["#49c5b1"]
    });


    // ----------------------------------------
    // Pageviews Area Chart (30 days)
    // ----------------------------------------
    var spaceviews_timeline_30d = new Keen.Query("count", {
        eventCollection: SPACE_VIEWS,
        interval: "daily",
        timeframe: THIS_30_DAYS
    });
    client.draw(spaceviews_timeline_30d, document.getElementById("spaceviews-30d"), {
        chartType: "areachart",
        title: false,
        height: 250,
        width: "auto",
        chartOptions: areaChartOptions,
        isStacked: true
    });

    // ----------------------------------------
    // Portfolio Additions (30d)
    // ----------------------------------------
    var port_add_timeline_30d = new Keen.Query("count", {
        eventCollection: ADDING_SPACE_TO_PORT,
        interval: "daily",
        timeframe: THIS_30_DAYS
    });
    client.draw(port_add_timeline_30d, document.getElementById("portfolioadds-30d"), {
        chartType: "areachart",
        title: false,
        height: 250,
        width: "auto",
        chartOptions: areaChartOptions,
        isStacked: true
    });


    // ----------------------------------------
    // Pageviews Area Chart (24 hrs)
    // ----------------------------------------
    var spaceviews_timeline_24h = new Keen.Query("count", {
        eventCollection: SPACE_VIEWS,
        interval: "hourly",
        timeframe: THIS_24_HRS
    });
    client.draw(spaceviews_timeline_24h, document.getElementById("spaceviews-24h"), {
        chartType: "areachart",
        title: false,
        height: 250,
        width: "auto",
        chartOptions: areaChartOptions,
        isStacked: true
    });

    // ----------------------------------------
    // Portfolio Additions (24h)
    // ----------------------------------------
    var port_add_timeline_24h = new Keen.Query("count", {
        eventCollection: ADDING_SPACE_TO_PORT,
        interval: "hourly",
        timeframe: THIS_24_HRS
    });
    client.draw(port_add_timeline_24h, document.getElementById("portfolioadds-24h"), {
        chartType: "areachart",
        title: false,
        height: 250,
        width: "auto",
        chartOptions: areaChartOptions,
        isStacked: true
    });


    // ----------------------------------------
    // Pageviews Pie Chart (24hrs)
    // ----------------------------------------
    var spaceviews_pie_24h = new Keen.Query("count", {
        eventCollection: SPACE_VIEWS,
        groupBy: SPACE_ID,
        timeframe: THIS_24_HRS
    });
    client.draw(spaceviews_pie_24h, document.getElementById("spaceviews-by-space-24h"), {
        chartType: "piechart",
        title: false,
        height: 250,
        width: "auto",
        chartOptions: pieChartOptions
    });

    // ----------------------------------------
    // Pageviews Pie Chart (24hrs)
    // ----------------------------------------
    var spaceviews_pie_24h = new Keen.Query("count", {
        eventCollection: SPACE_VIEWS,
        groupBy: USER_ID,
        timeframe: THIS_24_HRS
    });
    client.draw(spaceviews_pie_24h, document.getElementById("spaceviews-by-user-24h"), {
        chartType: "piechart",
        title: false,
        height: 250,
        width: "auto",
        chartOptions: pieChartOptions
    });




    // ----------------------------------------
    // Spaces added to portfolio by Space
    // ----------------------------------------
    var port_add_pie = new Keen.Query("count", {
        eventCollection: ADDING_SPACE_TO_PORT,
        timeframe: THIS_24_HRS,
        groupBy: SPACE_ID
    });
    client.draw(port_add_pie, document.getElementById("portfolioadds-by-space-24hs"), {
        chartType: "piechart",
        title: false,
        height: 250,
        width: "auto",
        chartOptions: pieChartOptions
    });

    // ----------------------------------------
    // Spaces added to portfolio by User
    // ----------------------------------------
    var port_add_pie = new Keen.Query("count", {
        eventCollection: ADDING_SPACE_TO_PORT,
        timeframe: THIS_24_HRS,
        groupBy: USER_ID
    });
    client.draw(port_add_pie, document.getElementById("portfolioadds-by-user-24hs"), {
        chartType: "piechart",
        title: false,
        height: 250,
        width: "auto",
        chartOptions: pieChartOptions
    });

});
