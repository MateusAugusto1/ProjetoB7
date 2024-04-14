
const overlay = document.getElementById('overlay');

imagem.addEventListener('mouseover', function() {
overlay.style.display = 'block';
});

imagem.addEventListener('mouseout', function() {
overlay.style.display = 'none';
});
