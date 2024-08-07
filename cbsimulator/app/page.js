import React from 'react'
import './pdf-viewer.js'
import './pdf-viewer.css'
import { pdfjs, Document, Page } from 'react-pdf';



export default function Home() {
  return (
<div>
  <head>
    

    
    <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
  </head>

  <body>
    <h1>Color Vision Deficiency PDF Viewer</h1>

    <div class="border-box border-box--green space-items">
      <h3>Select a PDF to get started.</h3>
      <input id="fileInput" type="file" accept=".pdf"/>
    </div>

    {/* <!-- Where PDF content will be rendered. --> */}
    <div id="container"></div>

    <h3 class="divider">Other Resources</h3>

    <ul>
      <li><a href="http://www.color-blindness.com/">Colblinder</a>, an educational site about color-blindness and color vision deficiency</li>
      <li><a href="http://wearecolorblind.com/">We are Colorblind.com</a>, dedicated to making the web a better place for the color blind</li>
      <li><a href="http://www.colourblindawareness.org/">Colour Blind Awareness</a>, U.K. based community interest organization</li>
      <li><a href="https://accessibility.18f.gov/index.html">18F Accessibility Guide</a>, resources and tools to help develop accessible products</li>
      <li><a href="https://www.smashingmagazine.com/2016/06/improving-color-accessibility-for-color-blind-users/">Improving The Color Accessibility For Color-Blind Users</a>, article in Smashing Magazine</li>
      <li><a href="https://chrome.google.com/webstore/detail/spectrum/ofclemegkcmilinpcimpjkfhjfgmhieb?hl=en">Spectrum</a>, a free color vision deficiency simulator for Chrome</li>
      <li><a href="http://colororacle.org/">Color Oracle</a>, a free color blindness simulator for Windows, Mac, and Linux</li>
    </ul>

    <h3 class="divider">FAQ</h3>

    <p><strong>Does this upload my PDF anywhere?</strong></p>

    <p>
      No, your files stay on your own computer! This site just displays them for
      you in the browser, and applies a color mask to each page to simulate different kinds of
      color vision deficiency.
    </p>

    <p><strong>Who made this site?</strong></p>

    
    {/* <!--
    Define SVG filters for each variant of color vision deficiency.
    Source: https://raw.githubusercontent.com/Altreus/colourblind/master/colourblind.svg
    --> */}
    <svg id="colorblind-filters">
        <defs>
            <filter id="protanopia">
                <feColorMatrix
                    type="matrix"
                    values="0.567,0.433,0,0,0  0.558,0.442,0,0,0  0 0.242,0.758,0,0  0,0,0,1,0"
                    in="SourceGraphic"
                />
            </filter>
            <filter id="protanomaly">
                <feColorMatrix
                    type="matrix"
                    values="0.817,0.183,0,0,0  0.333,0.667,0,0,0  0,0.125,0.875,0,0  0,0,0,1,0"
                    in="SourceGraphic"
                />
            </filter>
            <filter id="deuteranopia">
                <feColorMatrix
                    type="matrix"
                    values="0.625,0.375,0,0,0  0.7,0.3,0,0,0  0,0.3,0.7,0,0  0,0,0,1,0"
                    in="SourceGraphic"
                />
            </filter>
            <filter id="deuteranomaly">
                <feColorMatrix
                    type="matrix"
                    values="0.8,0.2,0,0,0  0.258,0.742,0,0,0  0,0.142,0.858,0,0  0,0,0,1,0"
                    in="SourceGraphic"
                />
            </filter>
            <filter id="tritanopia">
                <feColorMatrix
                    type="matrix"
                    values="0.95,0.05,0,0,0  0,0.433,0.567,0,0  0,0.475,0.525,0,0  0,0,0,1,0"
                    in="SourceGraphic"
                />
            </filter>
            <filter id="tritanomaly">
                <feColorMatrix
                    type="matrix"
                    values="0.967,0.033,0,0,0  0,0.733,0.267,0,0  0,0.183,0.817,0,0  0,0,0,1,0"
                    in="SourceGraphic"
                />
            </filter>
            <filter id="achromatopsia">
                <feColorMatrix
                    type="matrix"
                    values="0.299,0.587,0.114,0,0  0.299,0.587,0.114,0,0  0.299,0.587,0.114,0,0  0,0,0,1,0"
                    in="SourceGraphic"
                />
            </filter>
            <filter id="achromatomaly">
                <feColorMatrix
                    type="matrix"
                    values="0.618,0.320,0.062,0,0  0.163,0.775,0.062,0,0  0.163,0.320,0.516,0,0  0,0,0,1,0"
                    in="SourceGraphic"
                />
            </filter>
        </defs>
    </svg>

    {/* <!-- Load the PDF.js source code. --> */}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.428/pdf.min.js"></script>
    {/* <!-- Load the site source code. --> */}
    <script src="pdf-viewer.js"></script>

    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-54073560-5"></script>
     
     
  </body>

  </div>


  );
}
