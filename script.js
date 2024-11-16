document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const menu = document.querySelector(".menu");
  const gameplayContainer = document.getElementById("gameplayContainer");
  const gameplayVideo = document.getElementById("gameplayVideo");
  const backButton = document.getElementById("backButton");
  const songTitle = document.getElementById("songTitle");
  const songArtist = document.getElementById("songArtist");

  // Adiciona evento de clique em cada item
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const videoUrl = item.getAttribute("data-video");
      const title = item.getAttribute("data-title");
      const artist = item.getAttribute("data-artist");

      // Configura as fontes do vídeo e define os textos
      gameplayVideo.querySelector("source").src = videoUrl;
      songTitle.textContent = title;
      songArtist.textContent = artist;

      // Recarrega o elemento para aplicar a nova fonte
      gameplayVideo.load();

      // Inicia a reprodução
      gameplayVideo.play();

      // Mostra o container da gameplay e esconde o menu
      menu.style.display = "none";
      gameplayContainer.style.display = "flex";
    });
  });

  // Botão "Voltar"
  backButton.addEventListener("click", () => {
    gameplayVideo.pause();

    // Mostra o menu e esconde o container da gameplay
    menu.style.display = "flex";
    gameplayContainer.style.display = "none";
  });
});