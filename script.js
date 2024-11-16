document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const menu = document.querySelector(".menu");
  const gameplayContainer = document.getElementById("gameplayContainer");
  const gameplayVideo = document.getElementById("gameplayVideo");
  const backButton = document.getElementById("backButton");

  // Evento de clique em cada capa
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const videoUrl = item.getAttribute("data-video");

      // Configura o vídeo a ser reproduzido
      gameplayVideo.querySelector("source").src = videoUrl;
      gameplayVideo.load();

      // Mostra o container do vídeo
      menu.style.display = "none";
      gameplayContainer.style.display = "flex";

      // Reproduz o vídeo
      gameplayVideo.play();
    });
  });

  // Botão "Voltar"
  backButton.addEventListener("click", () => {
    // Pausa o vídeo
    gameplayVideo.pause();

    // Retorna ao menu
    menu.style.display = "flex";
    gameplayContainer.style.display = "none";
  });
});