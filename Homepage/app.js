OUTPUT = document.getElementById("out")
SLIDE = document.getElementById("slide")

async function movie(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd128131b33msh2d7517b075673cfp176ac2jsn7c6a97484ac2',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    
    data = await fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options);

    result = await data.json();

    const n = result.titles.length;
    const lists = result.titles;

    console.log(result)
    
    lists.forEach(element => {
        MovieBox = ""
        MovieSlide =""
        Genre =""
        let name = element.jawSummary.title;
        let description = element.jawSummary.contextualSynopsis.text;
        let photo = element.jawSummary.backgroundImage.url; 
        let type = element.jawSummary.maturity.rating.value
        let logo = element.jawSummary.logoImage.url

        for(let i = 0; i < element.jawSummary.genres.length; i++){
            let kind = element.jawSummary.genres[i].name
            let line = kind + ", "
            Genre += line
        }

        MovieBox = `
            <div class="card">
                <img class="image" src="${photo}">
                <div style="padding: 20px;" class="info">
                    <h1>${name}</h1>
                    <h3>Rate: ${type}</h3>
                    <p>${description}</p>
                </div>
            </div>
        `
        MovieSlide = `
            <div class="img-container">
                <img src="${photo}">
                <div class="hov">
                    <h1>${name}</h1>
                    <h3>Genre: ${Genre}</h3>
                    <p>${description}</p>
                </div>
            </div>
        `
        OUTPUT.innerHTML += MovieBox
        SLIDE.innerHTML += MovieSlide
    });
}

movie()

function contlog(){
    location.replace("../ContactLog/")
}

function out(){
    location.replace("../index.html")
}