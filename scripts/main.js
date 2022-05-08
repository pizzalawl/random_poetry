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

function turnArrayToObject(array) {
  for (let i = 0; i < array.length i++) {
    let object = new Object()
    object.i = array[i]
    return object
  }
}

function turnObjectIntoHTML(object, length, destination) {
  for (let i = 0; i < length; i++) {
    var i = document.createElement(i)
    i.innerHTML = object.i
    destination.appendChild(i)
  }
}

  
button.onclick = async () => {
  let data = await requestPoem(url)
  title.innerHTML = data[0].title
  author.innerHTML = data[0].author
  turnObjectIntoHTML(turnArrayToObject(data[0].lines), 10, fullBody)
}
