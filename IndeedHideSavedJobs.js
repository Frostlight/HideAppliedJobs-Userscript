/**
  The MIT License (MIT)

  Copyright (c) 2017 Frostlight

  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the "Software"), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
  the Software, and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/

// ==UserScript==
// @ids			 IndeedHideSavedJobs
// @name         Indeed Hide Saved Jobs
// @namespace    https://github.com/frostlight
// @version      1.6
// @author       Frostlight
// @description  Removes saved jobs from Indeed searches
// @license      MIT; https://spdx.org/licenses/MIT.html
// @copyright	 2017, Frostlight (https://openuserjs.org/users/Frostlight)
// @icon		 https://raw.githubusercontent.com/Frostlight/Userscripts-Indeed/master/icon.png
// @domain 		 raw.github.com
// @domain		 indeed.com
// @include      https://*.indeed.*/*
// @include      https://indeed.*/*
// @grant        none
// ==/UserScript==

// ==OpenUserJS==
// @author Frostlight
// ==/OpenUserJS==

document.querySelectorAll("a[href='/myjobs?from=serp#Saved']").forEach(function(element) {
    // Remove non sponsored saved elements
    upperElement = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    if (upperElement.tagName == 'DIV') {
        upperElement.parentNode.removeChild(upperElement);
    }

    // Take care of sponsored saved elements
    var upperElement = element.parentNode.parentNode.parentNode.parentNode;
    if (upperElement.tagName == 'DIV') {
        upperElement.parentNode.removeChild(upperElement);
    }
});
