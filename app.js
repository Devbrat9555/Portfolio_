document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();
  });
  

  const scrollTopBtn = document.getElementById("scrollTopBtn");
  
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };
  
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
