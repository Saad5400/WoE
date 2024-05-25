const currentProduct = chairs.find(e => e.id === parseInt(new URLSearchParams(window.location.search).get('id')));

document.getElementById('image').src = currentProduct.image;
document.getElementById('video').src = currentProduct.video;
document.getElementById('activeImage').innerHTML = document.getElementById('image').parentElement.innerHTML;
document.getElementsByTagName('h1')[0].innerText = currentProduct.name;
document.getElementById('description').innerText = currentProduct.description;
document.getElementById('price').innerText = currentProduct.price + ' SAR';
document.title = currentProduct.name;

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