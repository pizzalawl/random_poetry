const myButton = document.getElementById('myButton')
const title = document.getElementById('title')
const author = document.getElementById('author')
const container = document.getElementById('container')
const element = document.getElementById('element')
const form = document.getElementById("form")
let elementList = []
let executedBefore = false;


async function requestPoem(url) {
  let response = await fetch(url);
  let data = response.json()
  return data
}
  
myButton.onclick = async () => {
  if(executedBefore == true) {
    for (let i = 0; i < elementList.length; i++) {
      elementList.splice(i, i)
      console.log(elementList)
    }
  }
  let val = document.getElementById('input').value
  if (val == "") {
    val = "10"
  }
  let url = `https://poetrydb.org/random,linecount/1;${val}/title,author,lines.json`
  let data = await requestPoem(url)
  let poem = data[0].lines
  title.innerHTML = data[0].title
  author.innerHTML = data[0].author
  for (let i = 0; i < poem.length; i++) {
    let newElement = document.createElement('p')
    newElement.innerHTML = poem[i];
    container.appendChild(newElement)
    elementList.push(newElement + i)
    console.log(elementList)
  }
  executedBefore = true
}



