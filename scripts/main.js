const myButton = document.getElementById('myButton')
const title = document.getElementById('title')
const author = document.getElementById('author')
const container = document.getElementById('container')
const element = document.getElementById('element')
const form = document.getElementById("form")


async function requestPoem(url) {
  let response = await fetch(url);
  let data = response.json()
  return data
}

function clearContainer() {
  container.innerHTML = ""
}

function getFormValue() {
  let val = document.getElementById('input').value
  if (!val || val == "") {
    val = "10"
  }
  return val
}

function setPoem(data) {
  let poem = data[0].lines
  title.innerHTML = data[0].title
  author.innerHTML = data[0].author
  for (let i = 0; i < poem.length; i++) {
    let newElement = document.createElement('p')
    newElement.innerHTML = poem[i];
    container.appendChild(newElement)
} }

  
myButton.onclick = async () => { 
  clearContainer()
  let val = getFormValue()
  let url = `https://poetrydb.org/random,linecount/1;${val}/title,author,lines.json`
  let data = await requestPoem(url)
  setPoem(data)
}
