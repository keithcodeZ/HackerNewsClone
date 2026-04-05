import RouterHandler from "./router.js";

class App {
    constructor() {
        console.log('App entry point!');
        new RouterHandler();
        
    }
}

new App();