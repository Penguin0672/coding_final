window.addEventListener('DOMContentLoaded', () => {
  const emojis = ['👾', '😈', '👍', '💀', '😴'];
  const shapes = [
    [[0,0], [1,0], [2,0], [3,0]], // I
    [[0,0], [0,1], [1,0], [1,1]], // O
    [[0,1], [1,1], [2,1], [1,0]], // T
    [[0,0], [0,1], [0,2], [1,2]], // L
    [[1,0], [1,1], [1,2], [0,2]], // J
    [[0,1], [1,1], [1,0], [2,0]], // S
    [[0,0], [1,0], [1,1], [2,1]]  // Z
  ];

  const container = document.getElementById('emoji-layer');
  const blocks = [];

  for (let i = 0; i < 15; i++) {
    const group = document.createElement('div');
    group.classList.add('emoji-block');

    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const baseX = Math.random() * 90; // vw
    const baseY = Math.random() * 4000 + 200;

    // 🔥 New: random scale per block
    const scale = 1 + Math.random() * 0.8;  // range: 1.0 to 1.8
    const spacing = 2.3 * scale;           // emoji spacing

    shape.forEach(([dx, dy]) => {
      const span = document.createElement('span');
      span.classList.add('emoji');
      span.innerText = emoji;
      span.style.left = `${dx * spacing}rem`;
      span.style.top = `${dy * spacing}rem`;
      span.style.fontSize = `${2 * scale}rem`;
      group.appendChild(span);
    });

    group.dataset.scrollSpeed = 0.5 + Math.random() * 0.8;
    group.style.left = `${baseX}vw`;
    group.style.top = `${baseY}px`;

    container.appendChild(group);
    blocks.push(group);
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    blocks.forEach(block => {
      const speed = parseFloat(block.dataset.scrollSpeed);
      block.style.transform = `translateY(${scrollTop * speed}px)`;
    });
  });
});
