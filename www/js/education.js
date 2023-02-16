// Thomas Wallsmith
// 2023

const FADE_DELAY_MS = 300;
const FADE_FOLLOWUP_MULTIPLIER = 2;

// Instruction to load the menu content on page load
window.onload = () => fadeInContent('content-menu');

function changeSubheading(message)
{
     document.getElementById('subheading').innerText = message;
}
function swapContent(from, to)
{
     fadeOutContent(from);
     swapSubHeadingWithFade(determineSubheading(to));

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

     hideChildElementsAfterDelay(id, FADE_DELAY_MS*FADE_FOLLOWUP_MULTIPLIER);
}
function swapSubHeadingWithFade(message)
{
     let subheading = document.getElementById('subheading');
     fadeOut(subheading);
     sleep(FADE_DELAY_MS*FADE_FOLLOWUP_MULTIPLIER)
         .then(() => changeSubheading(message))
         .then(() => fadeIn(subheading));
}
function hideChildElementsAfterDelay(id, delay)
{
     sleep(delay).then(() => hideChildElements(id));
}
function hideChildElements(id)
{
     extractContentChildren(id).forEach(element => element.setAttribute("hidden", true))
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
         .then(() => fadeIn(section))

}
function fadeIn(section)
{
     section.removeAttribute("hidden");
     section.classList.add('fade-in-1');
}
function extractContentChildren(id)
{
     // Populating sections to do the fade in on
     let parent = document.getElementById(id).children;
     let children = [];
     for (let i = 0; i < parent.length; i++)
     {
          children.push(parent.item(i));
     }
     return children;
}
function sleep(ms)
{
     return new Promise(resolve => setTimeout(resolve, ms));
}