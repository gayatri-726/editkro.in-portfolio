function playVideo(container) {
  const thumbnail = container.querySelector(".thumbnail");
  const video = container.querySelector(".video");

  thumbnail.style.display = "none";
  video.style.display = "block";
  video.play();
}