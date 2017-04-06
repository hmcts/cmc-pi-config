// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://jenkins01.reform/blue/pipelines/
// @grant       GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle("article { padding-top: 0 !important; } .BasicHeader { height: 0 !important; visibility: hidden !important; }");

    // Your code here...
})();
