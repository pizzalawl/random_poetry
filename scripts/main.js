let url = 'https://poetrydb.org/random,linecount/1;10/title,author,lines.json'
const button = document.getElementById("button")
const title = document.getElementById("title")
const author = document.getElementById("author")
const body = document.getElementById("body")

async function requestPoem(url) {
  let response = await fetch(url);
  let data = response.json()
  return data
}

  
button.onclick = async () => {
  let data = await requestPoem(url)
  title.innerHTML = data[0].title
  author.innerHTML = data[0].author
  body.innerHTML = data[0].lines
}
