document.addEventListener("DOMContentLoaded", function () {
  const compliments = [
    "Ты сияешь, как идеальный зельевар!",
    "Твоя доброта греет лучше любого чарм-заклинания.",
    "Ты бы точно прошёл в финал Тремудрого турнира — по доброте!",
    "Улыбка у тебя лучше, чем у Колина Криви на первом курсе.",
    "Если бы твой характер был ингредиентом, он бы исцелял раны."
  ];

  const button = document.getElementById("get-compliment");
  const forecast = document.querySelector(".forecast");

  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    forecast.textContent = compliments[randomIndex];
  });
});
