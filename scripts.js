const FORECASTS = [
  'Пусть сладкое на кухне никогда не кончается',
  'Пусть снитч летит на желтую мантию, а не наоборот',
  'Для тебя у меня на диване в общей гостиной всегда есть свободное местечко',
]

let shownIndices = [];

const getRandomIndex = () => Math.floor(Math.random() * FORECASTS.length);

const handleClick = () => {
  const forecastNode = document.querySelector('.forecast');
  
  if (!forecastNode) {
    return;
  }
  
  if (shownIndices.length === FORECASTS.length) {
    shownIndices = [shownIndices[shownIndices.length - 1]];
  }
  
  let randomIndex = getRandomIndex();
  
  while(shownIndices.includes(randomIndex)) {
    randomIndex = getRandomIndex();
  }

  const randomForecast = FORECASTS[randomIndex];
  shownIndices.push(randomIndex);
  
  forecastNode.textContent = randomForecast;
}

const button = document.querySelector('.button');

if (button) {
  button.addEventListener('click', handleClick)
}
