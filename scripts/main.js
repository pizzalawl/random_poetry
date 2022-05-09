let url = 'https://poetrydb.org/random,linecount/1;10/title,author,lines.json'
const button = document.getElementById("button")
const title = document.getElementById("title")
const author = document.getElementById("author")
const body = document.getElementById("body")
const fullBody = document.getElementById("fullbody")

async function requestPoem(url) {
  let response = await fetch(url);
  let data = response.json()
  return data
}
  
button.onclick = async () => {
  let data = await requestPoem(url)
  let poem = data[0].lines
  title.innerHTML = data[0].title
  author.innerHTML = data[0].author
  for (let i = 0; i < poem.length; i++) {
    document.getElementById(`body${i+1}`).innerHTML = data[i];
  }
}
