const compliments = [
  "Ты сияешь, как золотой снитч на солнце!",
  "С тобой рядом — как в гостиной Хаффлпаффа: тепло и уютно.",
  "Ты создаешь магию одним только присутствием.",
  "Ты — человек, который делает Хогвартс добрее.",
  "С тобой даже Северус Снейп бы улыбнулся.",
  "Ты патронус среди дементоров будней!",
  "Ты как зелье счастья — сразу легче дышать."
];

function showCompliment() {
  const el = document.getElementById("compliment");
  const randomIndex = Math.floor(Math.random() * compliments.length);
  el.textContent = compliments[randomIndex];
}
