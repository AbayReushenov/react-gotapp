class ServiseGetData {
    getServer = async url => {
        const responceFetch = await fetch(url)

        if (!responceFetch.ok) {
          throw new Error (`Sorry you have  code of error on url: ${url}, status : ${responceFetch.status}`)
        }

        const objectJson = await responceFetch.json(url)
        
        return objectJson
    }
    
    methodGetServer = url => this.getServer(url)
}

const newGame = new ServiseGetData()
const _apiBase = "https://www.anapioficeandfire.com/api/"
const link = (urlApi, url, pageOrId) => `${urlApi}${url}${pageOrId}`

const base = [
    {key: 1, url: 'characters/', page: '?page=5&pageSize=10', id : 130},
    {key: 2, url: 'books/', page: '', id: 1},
    {key: 3, url: 'houses/', page: '', id: 1}
]


newGame.methodGetServer(link(_apiBase, base[0].url, base[0].page))
    .then(data => console.log(data))
  
newGame.methodGetServer(link(_apiBase, base[0].url, base[0].id))
    .then(data => console.log(data))
    

newGame.methodGetServer(link(_apiBase, base[0].url, base[0].page))
    .then(data => Array.isArray(data) ? data.forEach(arr => console.log(`Name: ${arr.name}`)) : console.log(`Name: ${data.name}`) )

newGame.methodGetServer(link(_apiBase, base[0].url, base[0].id))
    .then(data => Array.isArray(data) ? data.forEach(arr => console.log(`Name: ${arr.name}`)) : console.log(`Name: ${data.name}`) )

// //------------books -------------------

newGame.methodGetServer(link(_apiBase, base[1].url, base[1].page))
    .then(data => console.log(data))
  
newGame.methodGetServer(link(_apiBase, base[1].url, base[1].id))
    .then(data => console.log(data))
    

newGame.methodGetServer(link(_apiBase, base[1].url, base[1].page))
    .then(data => Array.isArray(data) ? data.forEach(arr => console.log(`Name: ${arr.name}`)) : console.log(`Name: ${data.name}`) )

newGame.methodGetServer(link(_apiBase, base[1].url, base[1].id))
    .then(data => Array.isArray(data) ? data.forEach(arr => console.log(`Name: ${arr.name}`)) : console.log(`Name: ${data.name}`) )

// ----------houses----

newGame.methodGetServer(link(_apiBase, base[2].url, base[2].page))
    .then(data => console.log(data))
  
newGame.methodGetServer(link(_apiBase, base[2].url, base[2].id))
    .then(data => console.log(data))
    

newGame.methodGetServer(link(_apiBase, base[2].url, base[2].page))
    .then(data => Array.isArray(data) ? data.forEach(arr => console.log(`Name: ${arr.name}`)) : console.log(`Name: ${data.name}`) )

newGame.methodGetServer(link(_apiBase, base[2].url, base[2].id))
    .then(data => Array.isArray(data) ? data.forEach(arr => console.log(`Name: ${arr.name}`)) : console.log(`Name: ${data.name}`) )


