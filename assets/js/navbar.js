function toggleMenu() {
    const nav = document.querySelector('nav nav');

    if (nav.style.height == '0px' || nav.style.height == '') {
        nav.style.height = '9rem';
    } else {
        nav.style.height = '0px';
    }
}

const nav = `<nav class="flex justify-start">
<button class="icon-button" style="margin-inline-start: 0.5rem;" onclick="toggleMenu()">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" style="width: 1.25rem;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
</button>
<a href="./index.html" style="font-size: 1.5rem; display: inline-block !important;">CyberChair</a>
<nav class="flex justify-start items-start">
    <a href="./contact.html">Contact Us</a>
    <a href="./about.html">Who Are We</a>
    <a href="./faq.html">FAQ</a>
</nav>
</nav>`;

document.querySelector('body').insertAdjacentHTML('afterbegin', nav);