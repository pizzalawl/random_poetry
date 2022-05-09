let url = 'https://poetrydb.org/random,linecount/1;10/title,author,lines.json'

async function requestPoem(url) {
  let response = await fetch(url);
  let data = response.json()
  return data
}
  
$('button').onclick = async () => {
  let data = await requestPoem(url)
  let poem = data[0].lines
  $('title').innerHTML = data[0].title
  $('author').innerHTML = data[0].author
  for (let i = 0; i < poem.length; i++) {
    let element = document.createElement(`body${i+1}`)
    $('fullBody').appendChild(element)
    document.getElementById(`body${i+1}`).innerHTML = poem[i];
  }
}
