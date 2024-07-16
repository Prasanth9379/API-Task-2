//Center Div element
var content=document.createElement("div");
content.setAttribute("class","center-part");

//Div element for Heading and Subheading
var coffmain=document.createElement("div");
coffmain.setAttribute("class","main");

//heading tag for display of title
var heading=document.createElement("h1");
heading.setAttribute("class","heading");
heading.innerHTML="☕ Coffee API";

//Description or Comments about this page
var subs=document.createElement("p");
subs.setAttribute("class","subheading");
subs.innerHTML=`Start your day with a lovely coffee...<i class="fa fa-exclamation"></i> <br> Click and Refresh on below for random pictures of <i class="fa fa-coffee"></i>`;

var buttons=document.createElement("div");
buttons.setAttribute("class","buttons");

//creation of Button that creates Random Coffee images
var button=document.createElement("button");
button.setAttribute("class","button1");
button.setAttribute("id","special");  
button.innerHTML="Random Coffee";

// Creation of another button for display of JSON file
var button2=document.createElement("button");
button2.setAttribute("class","buttonjson");
button2.setAttribute("id","special2");  
button2.innerHTML="Random Coffee [JSON]";

//Appending heading and desc in main div element
coffmain.append(heading,subs);
//Appending content and button in one div element
content.append(coffmain,button,button2);
// cont.append(content);
document.body.append(content);

//getting the request from the user on clicking the button
var btn = document.getElementById("special");
//onclicking the button redirects to the image on a new tab
btn.onclick = function fun(e)
{
    e.preventDefault();
    window.open('https://coffee.alexflipnote.dev/random');
}

var btn2=document.getElementById("special2");
btn2.onclick = function json(e)
{
    e.preventDefault();
    window.open('https://coffee.alexflipnote.dev/random.json');
}