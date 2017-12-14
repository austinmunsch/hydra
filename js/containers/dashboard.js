import Card from '../components/card'

export default class Dashboard {
  constructor () {
  }

  getData() {
    // This is where we'll grab data from our api (express)
    let promise = new Promise((resolve, reject) => {

      const request = new XMLHttpRequest()

      request.onload = () => {
        // Request finished. Do processing here.
        let data = JSON.parse(request.responseText)
        console.log(data)
        resolve(data)
      }

      request.open("GET", 'http://localhost:3000/api/villians')

      request.send()
    })

    return(promise)
  }

  getContent(data) {
    let container = document.createElement('div')
    container.id = 'container'

    let title = document.createElement('div')
    title.id = 'title'
    title.style.color = 'black'
    title.style.marginTop = '25px'
    title.style.marginLeft = '45%'
    title.style.textAlign = 'left'
    title.style.fontWeight = 'bold'
    title.style.fontSize = '24px'

    title.append('Web Project')

    container.appendChild(title)

	let header = document.createElement('div')
	header.style.display = 'block'
	header.style.padding = '8px'
	header.style.opacity = '0.5'
	header.style.backgroundColor = 'red'

	header.append(title)
	container.append(header)

    data.forEach((item) => {
      let characterCard = new Card(item)
      container.append(characterCard.getContent())
    })

    return container
  }

  animate() {
  }
}
