function doTest() {
  var c = document.getElementById("mainCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.strokeText("DOINB RYZE HACK？英雄联盟 400 CS 24 MIN", 10, 50);
};
function colorText() {
  var colors = ["red", "blue", "green", "DeepPink", "tomato"];
  document.getElementById("doinbText").style.color = colors[Math.floor(Math.random() * colors.length)];
};
