import gsap from "gsap";

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
if (!ctx) throw new Error("CTX is NULL");

let targetX = canvas.width / 2;
let targetY = canvas.height / 2;

const beast = {
  x: targetX,
  y: targetY,
};

window.addEventListener("mousemove", (e: MouseEvent) => {
  targetX = e.clientX;
  targetY = e.clientY;

  gsap.to(beast, {
    x: targetX,
    y: targetY,
    duration: 10,
    ease: "power2.out",
  });
});

function animate() {
  if (!ctx) throw new Error("CTX is NULL");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(beast.x, beast.y, 40, 0, Math.PI * 2);
  ctx.stroke();

  requestAnimationFrame(animate);
}

animate();