const data = [
    {
        id: 1,
        name: 'كرسي مكتبي',
        description: 'الوصف: كرسي مكتبي مريح',
        price: 100,
        image: './assets/images/chair1.png',
        video: './assets/videos/chair1.mp4'
    },
    {
        id: 2,
        name: 'كرسي مكتبي',
        description: 'الوصف: كرسي مكتبي مريح',
        price: 100,
        image: './assets/images/chair2.png',
        video: './assets/videos/chair2.mp4'
    },
    {
        id: 3,
        name: 'كرسي مكتبي',
        description: 'الوصف: كرسي مكتبي مريح',
        price: 100,
        image: './assets/images/chair3.png',
        video: './assets/videos/chair3.mp4'
    },
    {
        id: 4,
        name: 'كرسي مكتبي',
        description: 'الوصف: كرسي مكتبي مريح',
        price: 100,
        image: './assets/images/chair4.png',
        video: './assets/videos/chair4.mp4'
    }
];

const currentProduct = data.find(e => e.id === parseInt(new URLSearchParams(window.location.search).get('id')));

document.getElementById('image').src = currentProduct.image;
document.getElementById('video').src = currentProduct.video;
document.getElementById('activeImage').innerHTML = document.getElementById('image').parentElement.innerHTML;
document.getElementsByTagName('h1')[0].innerText = currentProduct.name;
document.getElementById('description').innerText = currentProduct.description;
document.getElementById('price').innerText = currentProduct.price + ' ريال';

function setActiveImage(element) {
    const activeImage = document.getElementById('activeImage');
    activeImage.innerHTML = element.innerHTML;
    try {
        activeImage.children[0].controls = true;
        activeImage.children[0].play();
    } catch (e) { }
    element.style.border = '1px solid rgba(var(--primary))';
    document.querySelectorAll('figure').forEach(e => {
        if (e !== element) {
            e.style.border = 'none';
        }
    });
}