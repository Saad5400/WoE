const footer = `    <footer class="flex gap-4">
<p style="height: auto; color: rgba(var(--primary-foreground))">جميع الحقوق محفوظة &copy; 2024</p>
<div class="flex gap-2">
    <a href="https://x.com/SaadBatwa" class="icon-button" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <g fill="currentColor">
                <path d="M1 2h2.5L3.5 2h-2.5z">
                    <animate fill="freeze" attributeName="d" dur="0.4s"
                        values="M1 2h2.5L3.5 2h-2.5z;M1 2h2.5L18.5 22h-2.5z" />
                </path>
                <path d="M5.5 2h2.5L7.2 2h-2.5z">
                    <animate fill="freeze" attributeName="d" dur="0.4s"
                        values="M5.5 2h2.5L7.2 2h-2.5z;M5.5 2h2.5L23 22h-2.5z" />
                </path>
                <path d="M3 2h5v0h-5z" opacity="0">
                    <set attributeName="opacity" begin="0.4s" to="1" />
                    <animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s"
                        values="M3 2h5v0h-5z;M3 2h5v2h-5z" />
                </path>
                <path d="M16 22h5v0h-5z" opacity="0">
                    <set attributeName="opacity" begin="0.4s" to="1" />
                    <animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s"
                        values="M16 22h5v0h-5z;M16 22h5v-2h-5z" />
                </path>
                <path d="M18.5 2h3.5L22 2h-3.5z" opacity="0">
                    <set attributeName="opacity" begin="0.5s" to="1" />
                    <animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s"
                        values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z" />
                </path>
            </g>
        </svg>
    </a>
    <a href="https://linkedin.com/in/SaadBatwa" class="icon-button" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0">
                <animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="0;1" />
            </circle>
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4">
                <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10V20">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s"
                        values="12;0" />
                </path>
                <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10V20">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s"
                        values="12;0" />
                </path>
                <path stroke-dasharray="24" stroke-dashoffset="24"
                    d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.5s"
                        values="24;0" />
                </path>
            </g>
        </svg>
    </a>
    <a href="https://t.me/+966536439394" class="icon-button" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2">
                <path stroke-dasharray="16" stroke-dashoffset="16" d="M21 5L18.5 20M21 5L9 13.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0" />
                </path>
                <path stroke-dasharray="22" stroke-dashoffset="22" d="M21 5L2 12.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="22;0" />
                </path>
                <path stroke-dasharray="12" stroke-dashoffset="12" d="M18.5 20L9 13.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s"
                        values="12;0" />
                </path>
                <path stroke-dasharray="8" stroke-dashoffset="8" d="M2 12.5L9 13.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s"
                        values="8;0" />
                </path>
                <path stroke-dasharray="6" stroke-dashoffset="6" d="M12 16L9 19M9 13.5L9 19">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s"
                        values="6;0" />
                </path>
            </g>
        </svg>
    </a>
</div>
</footer>`;

document.querySelector('body').insertAdjacentHTML('beforeend', footer);