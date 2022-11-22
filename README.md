## Personal Website built using Vue 3

Link: https://andrew-tai.com

### Technologies

Having worked with other frontend technologies like React, Flask (Ploly Dash), Bootstrap, and basic HTML, CSS and JavaScript, I wanted to learn a new technology which came in the form of Vue.js. I chose Vue because I read that it's a new and upcoming technology and was quickly taking up a large portion of the market along with React and Angular.

<!-- After getting a fundemental understanding of components and how I should make them transferable and modular, I started building my website. I had a  -->



### CORS 😠

I've came across CORS before. I never understood it, just tried to find some solution on StackOverflow with my same issue and pray for the best. This time I came across it again when trying to have my frontend Vue application talk to my backend GO application hosted on the same server. The error was "Access-Control-Allow-Origin" missing from the header. I finally sat down and read up on CORS, and from my understanding, this was the issue: Websites and web-applications don't allow cross origin communication (same IP different port number counts as a different origin). If during the pre-flight check of the website trying to request something from another resource, and the another resource doesn't allow it, the request errors. When running on my local machine, whether it was calling the API manually through the URL or Postman, or running the API locally, it wasn't considered "web" and therefore I didn't run into any issues during development. In order to avoid the missing "Access-Control-Allow-Origin", all I had to do was add some headers to my GO application that specifically allows for it.

### Deployment