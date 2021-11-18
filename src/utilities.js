//Define our labelmap
const labelMap = {
  1: { name: "A", clor: "red" },
  2: { name: "Amor", clor: "red" },
  3: { name: "Casa", clor: "red" },
  4: { name: "Dificil", clor: "red" },
  5: { name: "Duda", clor: "red" },
  6: { name: "E", clor: "red" },
  7: { name: "Gracias", clor: "red" },
  8: { name: "Hola", clor: "red" },
  9: { name: "Hospital", clor: "red" },
  10: { name: "Hoy", clor: "red" },
  11: { name: "I", clor: "red" },
  12: { name: "Mujer", clor: "red" },
  13: { name: "No", clor: "red" },
  14: { name: "Uno", clor: "red" },
  15: { name: "Dos", clor: "red" },
  16: { name: "Tres", clor: "red" },
  17: { name: "Cuatro", clor: "red" },
  18: { name: "O", clor: "red" },
  19: { name: "Papa", clor: "red" },
  20: { name: "Policia", clor: "red" },
  21: { name: "Si", clor: "red" },
  22: { name: "Telefono", clor: "red" },
  23: { name: "U", clor: "red" },
  24: { name: "Universidad", clor: "red" },
};

export const drawRect = (
  boxes,
  classes,
  scores,
  threshold,
  imgWidth,
  imgHeight,
  ctx
) => {
  for (let i = 0; i <= boxes.length; i++) {
    if (boxes[i] && classes[i] && scores[i] > threshold) {
      const [y, x, height, width] = boxes[i];
      const text = classes[i];

      ctx.strokeStyle = labelMap[text]["color"];
      ctx.lineWidth = 10;
      ctx.fillStyle = "white";
      ctx.font = "30px Arial";

      ctx.beginPath();
      ctx.fillText(
        labelMap[text]["name"] + " - " + Math.round(scores[i] * 100) / 100,
        x * imgWidth,
        y * imgHeight - 10
      );
      ctx.rect(
        x * imgWidth,
        y * imgHeight,
        (width * imgWidth) / 2,
        (height * imgHeight) / 1.5
      );
      ctx.stroke();
    }
  }
};
