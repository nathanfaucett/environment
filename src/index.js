var environment = exports,

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

environment.pixelRatio = environment.window.devicePixelRatio || 1;

environment.document = typeof(document) !== "undefined" ? document : {};

environment.worker = typeof(importScripts) !== "undefined";
