document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const menu = document.querySelector(".menu");
  const gameplayContainer = document.getElementById("gameplayContainer");
  const gameplayVideo = document.getElementById("gameplayVideo");
  const backButton = document.getElementById("backButton");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const videoUrl = item.getAttribute("data-video");

      // Define a URL do vídeo e força o carregamento
      gameplayVideo.querySelector("source").src = videoUrl;
      gameplayVideo.load();  // Força o carregamento do novo vídeo

      // Mostra o container do vídeo
      menu.style.display = "none";
      gameplayContainer.style.display = "flex";

      // Inicia o vídeo automaticamente com o autoplay
      gameplayVideo.play();
    });
  });

  backButton.addEventListener("click", () => {
    gameplayVideo.pause();
    gameplayVideo.currentTime = 0;

    // Retorna ao menu
    menu.style.display = "flex";
    gameplayContainer.style.display = "none";
  });
});
