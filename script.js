const content = document.getElementById('page-content');
const logoDiv = document.getElementById('logo-container');
const homeBtn = document.getElementById('home-btn');
const aboutBtn = document.getElementById('about-btn');
const portfolioBtn = document.getElementById('portfolio-btn');
const ratesBtn = document.getElementById('rates-btn');
const contactBtn = document.getElementById('contact-btn');
const portfolioDiv = document.getElementById('portfolio-container');

const allImgs = ["Photos/nature.jpg", "Photos/nature2.jpg", "Photos/nature3.jpg", "Photos/nature4.jpg", "Photos/nature5.jpg", "Photos/nature6.jpg"];

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
            content.style.height = "fit-content";
            content.style.paddingBottom = "25px";
        })
        .catch(error => {
            console.error('Error loading the text file:', error);
        });
};
portfolioBtn.addEventListener("click", toPortfolio);

