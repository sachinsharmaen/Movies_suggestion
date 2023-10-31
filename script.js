const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('.list');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const evalue = input.value;
    addDatatolist(evalue);
    
})

async function addDatatolist(evalue){
    let url = `https://api.tvmaze.com/search/shows?q=${evalue}`;
    const res = await axios.get(url)

    console.log(res)

    list.innerText = "";
    for(let item of res.data){
        let img = document.createElement('img');
        img.setAttribute('src', item.show.image.medium);
        list.append(img);
    }

}