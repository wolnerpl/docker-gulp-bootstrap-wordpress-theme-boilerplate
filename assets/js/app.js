const setupJS = function() {

};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    setupJS();
} else {
    document.addEventListener("DOMContentLoaded", setupJS);
}