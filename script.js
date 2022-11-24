urlApi = 'https://api.imgflip.com/get_memes?limit=3';

const imgMeme = document.getElementById('img_meme');

function getRandomInt(max) {
  const num = Math.floor(Math.random() * max);
  if(num===0){
    return num+1;
  }else{
    return num;
  }
}

async function getMemes(){
    const res = await fetch(urlApi);
    if(res.status != 200){
        console.log('Error: '+ res.status.message);
    }else{
        data = await res.json();
        console.log(data);
        imgMeme.src = data.data.memes[getRandomInt(101)].url;
    }  
}

async function onclickMemes(){
    //getMemes();
}

getMemes();

setInterval(() => {
    getMemes()
}, 2000)