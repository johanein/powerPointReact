const swDev = (params) => {
let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((resp)=>{
        console.log('resp in swDev :',resp );
    });
}

export default swDev