if (navigator.serviceWorker){
    navigator.serviceWorker.register('/sWorker.js',{scope:'/'}).then((reg)=>{
        console.log('Registration succeeded.');
    }).catch((er)=>{
        console.log(er);
    });
}

 navigator.serviceWorker.addEventListener('message', function(event){
        console.log("Client 1 Received Message: " + event.data);
    });

setTimeout(function() {
    let el=document.querySelector('#updatetime');
    let mc=new MessageChannel();
    mc.port1.onmessage=(e)=>{
        debugger;
        el.innerHTML=time;
    }
     navigator.serviceWorker.controller.postMessage("Calling from client",[mc.port2]);
    
}, 1000);

//http://craig-russell.co.uk/2016/01/29/service-worker-messaging.html#.WUJ6LWiGOUl