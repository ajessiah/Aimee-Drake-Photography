const content = document.getElementById('page-content');
const logoDiv = document.getElementById('logo-container');
const homeBtn = document.getElementById('home-btn');
const aboutBtn = document.getElementById('about-btn');
const portfolioBtn = document.getElementById('portfolio-btn');
const ratesBtn = document.getElementById('rates-btn');
const contactBtn = document.getElementById('contact-btn');
const portfolioDiv = document.getElementById('portfolio-container');

const allImgs = ["nature.jpg", "nature2.jpg", "nature3.jpg", "nature4.jpg", "nature5.jpg", "nature6.jpg"];

const toHome = () => {
    fetch("Pages/home.txt")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok: " + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            content.className = 'home';
            content.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the text file:', error);
        });
};

window.onload = toHome;
homeBtn.addEventListener("click", toHome);
logoDiv.addEventListener("click", toHome);

const toAbout = () => {
    fetch("Pages/about.txt")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok: " + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            content.className = 'about';
            content.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the text file:', error);
        });
};

aboutBtn.addEventListener("click", toAbout);

const popPortfolio = () => {
    allImgs.forEach((img) => {
        portfolioDiv.innerHTML += `
            <div id="${img}" class="img-container">
                <img src="${img}" class="portfolio-img">
            </div>
        `;
    })
};

const toPortfolio = () => {
    fetch("Pages/portfolio.txt")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok: " + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            content.className = 'portfolio';
            content.innerHTML = data;

            const portfolioDiv = document.getElementById('portfolio-container');
            allImgs.forEach((img) => {
                portfolioDiv.innerHTML += `
                    <div id="${img}" class="img-container">
                        <img src="${img}" class="portfolio-img">
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error('Error loading the text file:', error);
        });
};

portfolioBtn.addEventListener("click", toPortfolio);

