const base_url = 'https://thatcopy.pw/catapi/rest/';

const pegar_gatinhos = async () => {
    try {
        const data = await fetch(base_url);
        const json = await data.json()
        
        return json.webpurl
    } catch (e) {
        console.log(e.message)
    }
    
}

const load_img = async () => {
    const img = document.querySelector('#cat')
    img.src = await pegar_gatinhos();
}

load_img();

const btn = document.getElementById('mudar_gatinho');
btn.addEventListener('click', load_img);