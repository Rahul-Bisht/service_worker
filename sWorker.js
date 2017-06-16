self.addEventListener('install', (event) => {
    event.waitUntil(test(event));

    function test() {
        console.log('installing');
        return "test return";
    }
});
self.addEventListener('activate', (event) => {

})
self.addEventListener('message', (e) => {
    console.log('SW received msg ' + e.data);
    let t = new Date().getTime();
    send_message_to_client(e.ports[0], t).then((data) => {
        console.log("msg sent successfully.")
    }).catch((err) => {
        console.log(err);
    });
});

function send_message_to_client(client, msg) {
    return new Promise(function (resolve, reject) {
        var msg_chan = new MessageChannel();

        msg_chan.port1.onmessage = function (event) {
            if (event.data.error) {
                reject(event.data.error);
            } else {
                resolve(event.data);
            }
        };

        client.postMessage("SW Says: '" + msg + "'", [msg_chan.port2]);
    });
}