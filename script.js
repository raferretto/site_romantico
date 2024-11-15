// Data de início do relacionamento
const startDate = new Date('2023-06-12T00:00:00');

// Função para calcular o tempo juntos
function updateTimeTogether() {
    const now = new Date();
    const diff = now - startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('timeTogether').textContent = 
        `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualiza o timer a cada segundo
setInterval(updateTimeTogether, 1000);

// Array de fotos
const photos = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg', 'foto6.jpg', 'foto7.jpg'];
let currentPhotoIndex = 0;

// Elemento da coluna direita
const rightColumn = document.querySelector('.right-column');

// Função para mudar a foto de fundo
function updateBackgroundImage() {
    rightColumn.style.backgroundImage = `url(${photos[currentPhotoIndex]})`;
}

// Navegação para a próxima foto
document.getElementById('nextBtn').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updateBackgroundImage();
});

// Navegação para a foto anterior
document.getElementById('prevBtn').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updateBackgroundImage();
});

// Inicia com a primeira foto
updateBackgroundImage();
