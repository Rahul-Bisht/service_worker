self.addEventListener('install',(event)=>{
    event.waitUntil(test(event));

    function test(){
        console.log('installing');
        return "test return";
    }
});
self.addEventListener('activate',(event)=>{

})
self.addEventListener('message',(e)=>{
    console.log('SW received msg '+e.data);
    let t=new Date().getTime();
    console.log(t);
    console.log(e.ports);
    e.ports[0].postMessage(t);
});