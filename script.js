document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const videoPlayer = document.getElementById("videoPlayer");
  const gameplayVideo = document.getElementById("gameplayVideo");
  const audio = document.getElementById("audio");
  const closePlayer = document.getElementById("closePlayer");

  // Adiciona evento de clique em cada item
  items.forEach((item) => {
    item.addEventListener("click", () => {
      // Mostra o player de vídeo
      videoPlayer.style.display = "block";
      gameplayVideo.play();
      audio.play();  // Toca o áudio junto com o vídeo

      // Entra em tela cheia
      if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
      } else if (videoPlayer.webkitRequestFullscreen) {
        videoPlayer.webkitRequestFullscreen(); // Suporte para Safari
      } else if (videoPlayer.msRequestFullscreen) {
        videoPlayer.msRequestFullscreen(); // Suporte para IE/Edge
      }
    });
  });

  // Fecha o player de vídeo
  closePlayer.addEventListener("click", () => {
    gameplayVideo.pause();
    audio.pause();  // Para o áudio quando o vídeo for fechado
    gameplayVideo.currentTime = 0; // Reinicia o vídeo
    audio.currentTime = 0; // Reinicia o áudio
    videoPlayer.style.display = "none";

    // Sai do modo tela cheia
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // Suporte para Safari
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // Suporte para IE/Edge
    }
  });
});
