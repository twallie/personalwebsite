// Thomas Wallsmith
// 2023

const FADE_DELAY_MS = 500;

// Instruction to load the menu content on page load
window.onload =
    function()
    {
         fadeInContent('content-menu');
    }

function changeSubheading(message)
{
     document.getElementById('subheading').innerText = message;
}
function swapContent(from, to)
{
     fadeOutContent(from);
     changeSubheading(determineSubheading(to));

     // Show new content after delay
     sleep(FADE_DELAY_MS*2)
         .then(function() {
              fadeInContent(to);
         });
}
function determineSubheading(id)
{
     if (id === 'content-menu') return "a brief history of my academic career";
     else if (id === 'content-collegiate') return "my collegiate academic history";
     else return "UNDEFINED SUBHEADING";
}
function fadeOutContent(id)
{
     // Fading each content section
     let sections = extractContentChildren(id);
     sections.forEach((section) => fadeOut(section));

     hideChildElementsAfterDelay(FADE_DELAY_MS*2);
}
function hideChildElementsAfterDelay(delay)
{
     sleep(delay).then(() => hideChildElements());
}
function hideChildElements()
{
     extractContentChildren("content-menu").forEach(element => element.setAttribute("hidden", true))
}
function fadeOut(section)
{
     // Fades out a HTML section
     section.classList.remove("fade-in-1");
     section.classList.add("fade-out");
}
function fadeInContent(id)
{
     let sections = extractContentChildren(id);

     // Iterating over the sections to fade them in
     let offset = 0;
     sections.forEach((section) => fadeInWithOffset(section, offset++));
}
function fadeInWithOffset(section, offset)
{
     // Does some wacky JavaScript stuff to delay the fade in effect
     sleep(FADE_DELAY_MS * offset)
          .then(() => section.removeAttribute("hidden"))
          .then(() => section.classList.add('fade-in-1'));
}
function extractContentChildren(id)
{
     // Populating sections to do the fade in on
     let fadeInContent = document.getElementById(id).children;
     let sections = [];
     for (let i = 0; i < fadeInContent.length; i++)
     {
          sections.push(fadeInContent.item(i));
     }
     return sections;
}
function sleep(ms)
{
     return new Promise(resolve => setTimeout(resolve, ms));
}