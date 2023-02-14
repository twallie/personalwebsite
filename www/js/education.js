// Thomas Wallsmith
// Fades in the children of a html class with the id "fadeInContent"
const FADE_TIMER_OFFSET_MS = 750;

window.onload = fadeInContent;

// Content Swapping //
function swapContentToCollegiate() // TODO
{
     // Fade out previous content
     fadeOutContent();
}
// Animation //
function fadeOutContent()
{
     // Manual fading of subheading to be replaced with title of new content
     document.getElementById('subheading').classList.add("fade-out");

     // Fading each content section
     let sections = extractContentChildren();
     sections.forEach((section) => fadeOut(section));
}
function fadeOut(section)
{
     // Fades out a HTML section
     section.classList.remove("fade-in-1");
     section.classList.add("fade-out");
}
function fadeInContent()
{
     // Get array of sections to fade in
     let sections = extractContentChildren();

     // Iterating over the sections to fade them in
     let offset = 0;
     sections.forEach((section) => fadeInWithOffset(section, offset++));

     // Removing the fade-in-1 class from the sections
     sections.forEach((section) => section.classList.remove('fade-in-1'));

     // Report to the console we are done
     console.log("fadeInContent() is done!");
}
function fadeInWithOffset(section, offset)
{
     // Does some wacky JavaScript stuff to delay the fade in effect
     sleep(FADE_TIMER_OFFSET_MS * offset)
          .then(() => section.removeAttribute("hidden"))
          .then(() => section.classList.add('fade-in-1'));
}
// HTML/JS Utility //
function extractContentChildren()
{
     // Populating sections to do the fade in on
     let fadeInContent = document.getElementById("content").children;
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