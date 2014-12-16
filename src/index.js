var environment = module.exports;


environment.browser = !!(
    typeof(window) !== "undefined" &&
    typeof(navigator) !== "undefined" &&
    window.document
);

environment.node = !environment.browser;

environment.window = (
    typeof(window) !== "undefined" ? window :
    typeof(global) !== "undefined" ? global :
    typeof(self) !== "undefined" ? self : {}
);

environment.document = typeof(document) !== "undefined" ? document : {};

environment.canUseDOM = !!(typeof(window) !== "undefined" && window.document && window.document.createElement);

environment.canUseWorkers = typeof(Worker) !== "undefined";

environment.canUseEventListeners = environment.canUseDOM && !!(window.addEventListener || window.attachEvent);

environment.canUseViewport = environment.canUseDOM && !!window.screen;

environment.isInWorker = typeof(importScripts) !== "undefined";
