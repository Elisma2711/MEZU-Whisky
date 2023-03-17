let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
if (isMobileDevice) {
    myDiv.innerHTML("<h3>Its a Mobile Device !</h3>");
} else {
    document.write("<h3>Its a Desktop !</h3>");
}