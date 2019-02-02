const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Set up nav bar

let navBar = document.querySelectorAll('a');
navBar[0].textContent = siteContent['nav']['nav-item-1'];
navBar[1].textContent = siteContent['nav']['nav-item-2'];
navBar[2].textContent = siteContent['nav']['nav-item-3'];
navBar[3].textContent = siteContent['nav']['nav-item-4'];
navBar[4].textContent = siteContent['nav']['nav-item-5'];
navBar[5].textContent = siteContent['nav']['nav-item-6'];

// CTA

let snippetImg = document.getElementById('cta-img');
snippetImg.setAttribute('src', siteContent['cta']['img-src'])

document.querySelector('h1').textContent = siteContent['cta']['h1'];
document.querySelector('button').textContent = siteContent['cta']['button'];

// Main Content

let h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4']
let topText = document.querySelectorAll('.top-content .text-content p');
topText[0].textContent = siteContent['main-content']['features-content'];
topText[1].textContent = siteContent['main-content']['about-content'];

document.querySelector('#middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];
let bottomText = document.querySelectorAll('.bottom-content .text-content p');
bottomText[0].textContent = siteContent['main-content']['services-content'];
bottomText[1].textContent = siteContent['main-content']['product-content'];
bottomText[2].textContent = siteContent['main-content']['vision-content']

// Contact

h4[5].textContent = siteContent['contact']['contact-h4'];
let contact = document.querySelectorAll('.contact p');
contact[0].textContent = siteContent['contact']['address'];
contact[1].textContent = siteContent['contact']['phone'];
contact[2].textContent = siteContent['contact']['email'];

// Footer

document.querySelector('footer p').textContent = siteContent['footer']['copyright'];


