(function(w,d,s,g,js,fjs){
  g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(cb){this.q.push(cb)}};
  js=d.createElement(s);fjs=d.getElementsByTagName(s)[0];
  js.src='https://apis.google.com/js/platform.js';
  fjs.parentNode.insertBefore(js,fjs);js.onload=function(){g.load('analytics')};
}(window,document,'script'));

gapi.analytics.ready(function() {

  // Step 3: Authorize the user.

  var CLIENT_ID = '1033615168284-0iikdbsk1u2hrhddi6ficj8q56cue8g9.apps.googleusercontent.com';

  gapi.analytics.auth.authorize({
    container: 'auth-button',
    clientid: CLIENT_ID,
  });

  // Step 4: Create the view selector.

  var viewSelector = new gapi.analytics.ViewSelector({
    container: 'view-selector'
  });

  // Step 5: Create the timeline chart.

  var timeline = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:newUsers',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'timeline',
      options: {
        width: '100%'
      }
    }
  });

  var userGeo = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:region',
      'max-results' : 10,
      'metrics': ['ga:sessions'],
      'sort': '-ga:sessions',
      'start-date': '7daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'PIE',
      container: 'user-geo',
      options: {
        width: '100%'
      }
    }
  });

  var newChart = new gapi.analytics.googleCharts.DataChart({
    query: {
      'dimensions': 'ga:browser',
      'metrics': 'ga:sessions',
      'sort': '-ga:sessions',
      'max-results': '7',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'PIE',
      container: 'gchart',
      options: {
        width: '100%'
      }
    }
  });
  // Step 6: Hook up the components to work together.
  timeline.set({query: {ids: 'ga:78731694'}}).execute();
  newChart.set({query: {ids: 'ga:78731694'}}).execute();
  userGeo.set({query: {ids: 'ga:78731694'}}).execute();

  gapi.analytics.auth.on('success', function(response) {
    viewSelector.execute();
  });

  viewSelector.on('change', function(ids) {
    timeline.set({query: {ids: 'ga:78731694'}}).execute();
    newChart.set({query: {ids: 'ga:78731694'}}).execute();
    userGeo.set({query: {ids: 'ga:78731694'}}).execute();
  });
});
