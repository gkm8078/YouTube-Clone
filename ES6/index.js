
// trending videos codes start

const trendingVideos = async() => {

    try{

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=trending&key=AIzaSyBmt85UWXY0BBlTeNsKbTAh5FfM94-hHuk&maxResults=20`)

        let data = await res.json()

        let dataArr = data.items

        console.log(dataArr)

        displayFun(dataArr)

    }
    catch(error){

        console.log("error", error)

    }
}

trendingVideos()

// trending videos codes start




// result videos codes start

const searchVideos = async() => {

    try{

        let input = document.querySelector("#input").value

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=AIzaSyBmt85UWXY0BBlTeNsKbTAh5FfM94-hHuk&maxResults=20`)

        let data = await res.json()

        let dataArr = data.items

        displayFun(dataArr)

    }
    catch(error){

        console.log("error", error)

    }
}

// result videos codes start




// append data codes start

const displayFun = (data) => {

    document.querySelector("#movies").innerHTML = null

    data.map((elem) => {

        let div = document.createElement("div")
        div.setAttribute("class", "container")

        let thumbnail = document.createElement("img")
        thumbnail.src = elem.snippet.thumbnails.high.url
        thumbnail.addEventListener("click", () =>{

            watchVideos(elem)

        })

        let name = document.createElement("div")
        name.innerHTML = elem.snippet.title

        
        div.append(thumbnail, name)

        document.querySelector("#movies").append(div)

    })

}

// append data codes ends



// watch function codes start

const watchVideos = (data) => {

    localStorage.setItem("watchMovies", JSON.stringify(data))

    window.location.href = "watch.html"

}

// watch function codes start