// export default 
export default class GotService {
    constructor(){
        this._apiBase = "https://www.anapioficeandfire.com/api/"
        this.base = [
            {key: 0, url: 'characters/', page: '?page=5&pageSize=10', id : 130},
            {key: 1, url: 'books/', page: '', id: 1},
            {key: 2, url: 'houses/', page: '', id: 1}
            ]  
    }

    link = (urlApi, url, pageOrId) => `${urlApi}${url}${pageOrId}`
    
    getServer = async url => {
        const responceFetch = await fetch(url)

        if (!responceFetch.ok) {
          throw new Error (`Sorry you have  code of error on url: ${url}, status : ${responceFetch.status}`)
        }

        return await responceFetch.json(url)
    }

    getData = index  => {
         this.getServer(this.link(this._apiBase, this.base[index].url, this.base[index].page))
            .then(data => data.forEach(item => console.log(item)))
    }

    getElement = index => {
        this.getServer(this.link(this._apiBase, this.base[index].url, this.base[index].id))
            .then(data => console.log(data))
    }

    getDataName = index => {
        this.getServer(this.link(this._apiBase, this.base[index].url, this.base[index].page))
        .then(data => data.forEach(arr => console.log(`Name: ${arr.name}`)))  
        }

    getElementName = index => {
        this.getServer(this.link(this._apiBase, this.base[index].url, this.base[index].id))
        .then(data => console.log(`Name: ${data.name}`))   
        }

}

// test

// const newGame = new GotService()

// newGame.getData(0)

// newGame.getData(1)
// newGame.getData(2)

// newGame.getElement(0)
// newGame.getElement(1)
// newGame.getElement(2)

// newGame.getDataName(0)
// newGame.getDataName(1)
// newGame.getDataName(2)

// newGame.getElementName(0)
// newGame.getElementName(1)
// newGame.getElementName(2)