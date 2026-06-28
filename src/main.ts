import gsap from "gsap";

const head = document.getElementById("head") as HTMLCanvasElement;
head.width = window.innerWidth;
head.height = window.innerHeight;

const ctx = head.getContext("2d");
if (!ctx) throw new Error("CTX is NULL");

let targetX = head.width / 2;
let targetY = head.height / 2;

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
  ctx.clearRect(0, 0, head.width, head.height);

  ctx.beginPath();
  ctx.arc(beast.x, beast.y, 20, 0, Math.PI * 2);
  ctx.stroke();

  requestAnimationFrame(animate);
}

animate();