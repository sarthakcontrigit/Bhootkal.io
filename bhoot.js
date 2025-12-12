
function showPage(pageId) {
    const allPages = document.querySelectorAll('.page-content');
    
    allPages.forEach(page => {
        page.classList.add('hidden');
    });

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.remove('hidden');
    }

    updateActiveNav(pageId);
}

function updateActiveNav(pageId) {
  
    const allLinks = document.querySelectorAll('.nav-link');
    allLinks.forEach(link => {
        link.classList.remove('active');
    });

    allLinks.forEach(link => {
        if (link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        }
    });
}


const tipBtn = document.getElementById('tip-btn');
const tipText = document.getElementById('tip-text');

if (tipBtn) {
    tipBtn.addEventListener('click', function() {
        const tips = [
            "Wear comfortable shoes for the Sinhagad trek!",
            "Visit Shaniwar Wada in the evening for the light show.",
            "Carry a flashlight for the darker caves in Ajanta.",
            "Don't forget water bottles, it gets hot in Pune!"
        ];
        
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        
        tipText.textContent = "Tip: " + randomTip;
        tipText.style.color = "#d35400";
        tipText.style.fontWeight = "bold";
    });
}


const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});