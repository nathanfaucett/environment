var environment = module.exports,

    hasWindow = typeof(window) !== "undefined",
    userAgent = hasWindow ? window.navigator.userAgent : "";


environment.browser = !!(
    hasWindow &&
    typeof(navigator) !== "undefined" &&
    window.document
);

environment.node = !environment.browser;

environment.mobile = environment.browser && /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());

environment.window = (
    hasWindow ? window :
    typeof(global) !== "undefined" ? global :
    typeof(self) !== "undefined" ? self : {}
);

environment.document = typeof(document) !== "undefined" ? document : {};

environment.canUseDOM = !!(typeof(window) !== "undefined" && window.document && window.document.createElement);

environment.canUseWorkers = typeof(Worker) !== "undefined";

environment.canUseEventListeners = environment.canUseDOM && !!(window.addEventListener || window.attachEvent);

environment.canUseViewport = environment.canUseDOM && !!window.screen;

environment.isInWorker = typeof(importScripts) !== "undefined";
