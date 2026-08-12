document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openBtn");
  const envelopeScreen = document.getElementById("envelope-screen");
  const letterScreen = document.getElementById("letter-screen");

  openBtn.addEventListener("click", function () {
    envelopeScreen.style.display = "none";
    letterScreen.style.display = "flex";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
