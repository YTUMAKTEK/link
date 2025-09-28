window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.querySelector(".loading-screen").style.display = "none";
      document.querySelector(".app").classList.remove("hidden");
    }, 2500);
  });
  
  function shareCard(event) {
    event.preventDefault();
    event.stopPropagation();
  
    if (navigator.share) {
      navigator.share({
        title: "Evolution of the Automobile",
        text: "Check out this article!",
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this device.");
    }
  }
  