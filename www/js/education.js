// Thomas Wallsmith
// Fades in the children of a html class with the id "fadeInContent"

window.onload = fadeInSections;
function fadeInSections()
{
     // Populating sections to do the fade in on
     let fadeInContent = document.getElementById("fadeInContent").children;
     let sections = [];
     for (let i = 0; i < fadeInContent.length; i++)
     {
          sections.push(fadeInContent.item(i));
     }

     // Iterating over the sections to fade them in
     let offset = 0;
     sections.forEach((section) => fadeInWithOffset(section, offset++));
}

function fadeInWithOffset(section, offset)
{
     // Does some wacky JavaScript stuff to
     sleep(1000*offset)
          .then(() => section.removeAttribute("hidden"))
          .then(() => section.classList.add('fade-in-1'));
}

function sleep(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
}