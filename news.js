console.log("i am working good");
let source = '';
let news = document.getElementById('news');
const xhr = new XMLHttpRequest();
xhr.open('get', `https://newsapi.org/v2/top-headlines?country=in&apiKey=038fd8ecfd414d5dbbb289eb0b294a06`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newshtml = "";
        articles.forEach(function (element) {
            let news2 =
                `<h2> ${element["title"]}</h2>
            <p>${element["content"]}<a href="${element['url']}" target="blank">Read more here</a></p>`;
            newshtml += news2;
        });
        news.innerHTML = newshtml;
    }
    else {
        console.log("some error occured");
    }
}
xhr.send();
console.log('');



