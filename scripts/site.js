if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sWorker.js', {
        scope: '/'
    }).then((reg) => {
        console.log('Registration succeeded.');
    }).catch((er) => {
        console.log(er);
    });
}

function send_message_to_sw(msg) {
    return new Promise(function (resolve, reject) {
        var mc = new MessageChannel();

        mc.port1.onmessage = function (event) {
            if (event.data.error) {
                reject(event.data.error);
            } else {
                resolve(event.data);
            }
        };

        navigator.serviceWorker.controller.postMessage(msg, [mc.port2]);
    });
}
setInterval(function () {
    let el = document.querySelector('#updatetime');
    send_message_to_sw('get time').then((data) => {
        el.innerHTML = data;
    }).catch((err) => {
        console.log(err);
    })
}, 500);

//http://craig-russell.co.uk/2016/01/29/service-worker-messaging.html#.WUJ6LWiGOUl