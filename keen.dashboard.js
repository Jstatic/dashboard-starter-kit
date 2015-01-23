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
    var ADDING_SPACE_TO_PORT = "portfolio_added_space";
    var USER_ID = "user_id";
    var SPACE_ID = "portfolio_space_key_id";
    var THIS_30_DAYS = "this_30_days";
    var THIS_7_DAYS = "this_7_days";
    var THIS_24_HRS = "this_24_hours";
    //
    // -- END CONSTANTS
    //


    // ----------------------------------------
    // Marketing Manager Engagement
    // ----------------------------------------

    var marketingChannelsMetric = new Keen.Query("count", {
        eventCollection: "marketingchannel_created",
        timeframe: "last_7_days"
    });
        client.draw(marketingChannelsMetric, document.getElementById("marketing-channels-metric"), {
        // Custom configuration here
    });

      var marketingChannels = new Keen.Query("count", {
        eventCollection: "marketingchannel_created",
        timeframe: "last_7_days",
        groupBy: "user_id"
      });
      client.draw(marketingChannels, document.getElementById("marketing-channels-created"), {
        // Custom configuration here
      });

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


    var newCount = new Keen.Query("count", {
        eventCollection: SPACE_VIEWS,
        timeframe: THIS_24_HRS
    });

    var spaceViewsMetric24 = new Keen.Dataviz()
    .el(document.getElementById("spaceviews-metric-24h"))
    .title("Spaces Viewed in Last 24 Hours")
    .chartType("metric")
    .prepare();

    var runRequest = client.run(newCount, function(){
        spaceViewsMetric24
        .parseRequest(this)
        .render();
    });

    setInterval(function(){
        spaceViewsMetric24.prepare();
        runRequest.refresh();
    }, 60000 * 5);

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
        timeframe: THIS_7_DAYS
    });
    client.draw(count, document.getElementById("portfolioadds-metric-24h"), {
        chartType: "metric",
        title: "Spaces Added to Portfolios During Last 7 Days",
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
        isStacked: false
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
    client.draw(port_add_pie, document.getElementById("portfolioadds-by-space-24h"), {
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
    client.draw(port_add_pie, document.getElementById("portfolioadds-by-user-24h"), {
        chartType: "piechart",
        title: false,
        height: 250,
        width: "auto",
        chartOptions: pieChartOptions
    });

    var spaceViews = new Keen.Query("count", {
        eventCollection: SPACE_VIEWS,
        interval: "daily",
        timeframe: "this_30_days"
    });
    var spaceAdded = new Keen.Query("count", {
        eventCollection: ADDING_SPACE_TO_PORT,
        interval: "daily",
        timeframe: "this_30_days"
    });

    var newChart = new Keen.Dataviz()
        .el(document.getElementById("new-chart"))
        .chartType("areachart")
        .height(250)
        .chartOptions({
            chartArea: {
            height: "85%",
            left: "5%",
            top: "5%",
            width: "80%"
        }
        })
        .prepare();

    client.run([spaceViews, spaceAdded], function(response){
            var result1 = this.data[0].result;
            var result2 = this.data[1].result;
            var cData = [];
            var i = 0;

            while(i < result1.length) {
                cData[i]= {
                    timeframe: result1[i]["timeframe"],
                    value: [
                        {category: "Space Views", result: result1[i]["value"]},
                        {category: "Added to Portfolio", result: result2[i]["value"]}
                    ]
                };
                if (i == result1.length-1) {
                    newChart
                        .parseRawData({result: cData})
                        .render();
                }
                i++;
            }
    });
});
