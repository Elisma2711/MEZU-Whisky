let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
if (isMobileDevice) {
    document.write('\
    <header id="headerMobile">\
     <img class="logoHeader" src="resources/logomezupng.png" alt="Logo de MEZU Whisky">\
    </header>');
} else {
    document.write('\
    <header id="headerDesktop">\
     <img class="logoHeader" src="resources/logomezupng.png" alt="Logo de MEZU Whisky">\
    </header>');
}