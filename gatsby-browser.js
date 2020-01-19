exports.onRouteUpdate = ({ location }) => {
    console.log(location)
    runAnalytics(location)
}

function runAnalytics(location) {
    if (window.location.hostname !== 'vandevoorde.me') {
        return
    }

    if (window.goatcounter == null) {
        window.setTimeout(runAnalytics, 500)
        return
    }

    window.goatcounter.vars = {no_onload: true}
    window.counter = 'https://vandevoorde.goatcounter.com/count'
    
    window.goatcounter.count({
        page: location.pathname + location.search + location.hash,
    });
}