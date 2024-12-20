const url = "https://dog.ceo/api/breeds/image/random";
let show = document.querySelector("#show");
let img = document.querySelector("#images");

show.addEventListener("click",async ()=>{
    let res = await getImages();
    img.setAttribute("src",res);
    
    
})

async function getImages() {
    try {
        let result = await axios.get(url);
        return result.data.message;
        
    } catch (error) {
        console.log(error);
    }
}
