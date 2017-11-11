// ==UserScript==
// @name         Hide Applied Jobs
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes applied Jobs from Indeed searches
// @author       Frostlight
// @match        https://*.indeed.com/jobs*
// @match        https://indeed.com/jobs*
// @grant        none
// ==/UserScript==

// ==OpenUserJS==
// @author Frostlight
// ==/OpenUserJS==

document.querySelectorAll("a[href='/myjobs?from=serp#Applied']").forEach(function(element) {
    // Remove non sponsored applied elements
    upperElement = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    if (upperElement.tagName == 'DIV') {
        upperElement.parentNode.removeChild(upperElement);
    }

    // Take care of sponsored applied elements
    var upperElement = element.parentNode.parentNode.parentNode.parentNode;
    if (upperElement.tagName == 'DIV') {
        upperElement.parentNode.removeChild(upperElement);
    }
});
