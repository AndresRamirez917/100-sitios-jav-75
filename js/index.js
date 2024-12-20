async function getData() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const coctail = await result.json();
    const gallery = ["gallery1","gallery2","gallery3","gallery4","gallery5"];
    const linksArr = ["1","2","3","4","5"];
    const randCoctail = coctail.drinks.sort(() => 0.5 - Math.random()).slice(0, 5);
    console.log(coctail);
    randCoctail.forEach((element, index) => {
        const box = document.createRange().createContextualFragment(`
            
         

            <div class="grid-box box-${linksArr[index]}">
                <a href="${gallery[index]}.html?img=${encodeURIComponent(element.strDrinkThumb)}" onclick="saveImage('${element.strDrinkThumb}', '${linksArr[index]}')">
                <img src="${element.strDrinkThumb}" alt="">
                </a>
            </div>

       
            
            `)
            const gallery_grid = document.querySelector('.gallery-grid');
            gallery_grid.append(box)
    });
}

function saveImage(imgUrl, page) {
    localStorage.setItem(`savedImage_${page}`, imgUrl);
} 



async function getDataGallery() {
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    console.log(character);
    const randCharacter = character.results.sort(() => 0.5 - Math.random()).slice(0, 6);
    randCharacter.forEach(element => {
        const box = document.createRange().createContextualFragment(`
            
             <div class="gallery2-flex">
                    <img src="${element.image}" alt="">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium, nam praesentium ducimus incidunt qui corporis distinctio est excepturi doloremque temporibus quas tempora? Magnam excepturi blanditiis, vitae, consequuntur ea dignissimos repellat ipsum, laboriosam nostrum maxime ex accusantium hic! Cupiditate tempore praesentium accusamus tenetur repellendus ad ratione facilis quidem assumenda? Et.</p>
                </div>
            
            `)
            const gallery = document.querySelector('.gallery-2-row');
            gallery.append(box)
    })
}
getData()
getDataGallery()