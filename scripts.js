const compliments = [
  'Пусть сладкое на кухне никогда не кончается',
  'Пусть снитч летит на желтую мантию, а не наоборот',
  'Для тебя у меня на диване в общей гостиной всегда есть свободное местечко',
];

function generateCompliment() {
  const compliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("compliment").textContent = compliment;
}
