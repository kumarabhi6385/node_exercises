const topicService = require("./topicService");
const http = require("http");

function getDataInHTML() {
  return `<!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    ul, #myUL {
      list-style-type: none;
    }
    
    #myUL {
      margin: 0;
      padding: 0;
    }
    
    .caret {
      cursor: pointer;
      -webkit-user-select: none; /* Safari 3.1+ */
      -moz-user-select: none; /* Firefox 2+ */
      -ms-user-select: none; /* IE 10+ */
      user-select: none;
    }
    
    .caret::before {
      content: ">";
      color: black;
      display: inline-block;
      margin-right: 6px;
    }
    
    .caret-down::before {
      -ms-transform: rotate(90deg); /* IE 9 */
      -webkit-transform: rotate(90deg); /* Safari */'
      transform: rotate(90deg);  
    }
    
    .nested {
      display: none;
    }
    
    .active {
      display: block;
    }
    </style>
    </head>
    <body>
    
    ${topicService.getDataInHTML()}
    
    <script>
    var toggler = document.getElementsByClassName("caret");
    var i;
    
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
    </script>
    
    </body>
    </html>
    `;
}

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/palin" });
      res.end("welcome to home page");
    } else if (req.url === "/topics") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(topicService.getData()));
    } else if (req.url === "/topicshtml") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(getDataInHTML());
    } else {
      res.writeHead(404, { "Content-Type": "text/palin" });
      res.end("Page Not Found");
    }
  })
  .listen(3000);

//console.log(JSON.stringify(topicService.getData()));
