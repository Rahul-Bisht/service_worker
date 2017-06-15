if (navigator.serviceWorker){
    navigator.serviceWorker.register('/sWorker.js',{scope:'/'}).then((reg)=>{
        console.log('Registration succeeded.');
    }).catch((er)=>{
        console.log(er);
    });
}

setTimeout(function() {
    let el=document.querySelector('#updatetime');
    let mc=new MessageChannel();
    mc.port1.onmessage=(e)=>{
        debugger;
        el.innerHTML=time;
    }
     navigator.serviceWorker.controller.postMessage("Calling from client",[mc.port2]);
    
}, 1000);