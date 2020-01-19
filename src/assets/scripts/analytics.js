(() => {
    if (window.location.host !== 'vandevoorde.me') {
        return;
    }

    window.goatcounter = window.goatcounter || {};
    window.goatcounter.vars = {no_onload: true}

    window.addEventListener('hashchange', function(e) {
        window.goatcounter.count({
            page: location.pathname + location.search + location.hash,
        });
    });

    window.counter = 'https://vandevoorde.goatcounter.com/count'

    let script = document.createElement('script');
    script.async = 1;
    script.src = '//gc.zgo.at/count.js';
    var ins = document.getElementsByTagName('script')[0];
    ins.parentNode.insertBefore(script, ins)
})();