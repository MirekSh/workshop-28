import '@babel/polyfill';

import Application from './Application';

let swRegistration = null;

if('serviceWorker' in navigator) {
    global.addEventListener('load', async () => {
        swRegistration = await navigator.serviceWorker.register('/sw.js');
        console.log(swRegistration);
    })
}

const rootEl = document.querySelector('body');
const app = new Application(rootEl);
app.start();