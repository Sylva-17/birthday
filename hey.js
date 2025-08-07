 function fete(){
   // Utility to get a random number between min and max
  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }
  // Firework colors
  const colors = ["#ff0", "#f0f", "#0ff", "#f30", "#0f0", "#fff"];

  function createFirework() {
    const fw = document.createElement("div");
    fw.className = "firework";
    fw.style.left = rand(10, 90) + "vw";
    fw.style.top = rand(40, 80) + "vh";
    document.body.appendChild(fw);

    // Create particles
    const particles = 18;
    for (let i = 0; i < particles; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const angle = (i / particles) * 2 * Math.PI;
      const dist = rand(80, 150);
      p.style.setProperty("--tx", Math.cos(angle) * dist + "px");
      p.style.setProperty("--ty", Math.sin(angle) * dist + "px");
      p.style.setProperty("--c", colors[Math.floor(rand(0, colors.length))]);
      fw.appendChild(p);
    }

    setTimeout(() => {
      fw.remove();
    }, 1400);
  }

  // Launch fireworks repeatedly
  setInterval(createFirework, 600);
document.getElementById("gateau").style.display = "block";
   document.getElementById("container").style.display = "none";
   document.body.style.background ="#00202e";

  }