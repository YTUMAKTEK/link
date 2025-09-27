window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.querySelector(".loading-screen").style.display = "none";
      document.querySelector(".app").classList.remove("hidden");
    }, 2500);
  });
  
  document.getElementById("sharePageBtn").addEventListener("click", async () => {
    if (navigator.share) {
      await navigator.share({
        title: "MAKTEK",
        text: "Check out this awesome page!",
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this device.");
    }
  });
  
  window.shareCard = async function () {
    if (navigator.share) {
      await navigator.share({
        title: "Evolution of the Automobile",
        text: "Check out this article!",
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this device.");
    }
  };
  