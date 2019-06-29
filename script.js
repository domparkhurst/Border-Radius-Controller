function radius() {
  var myShapeSlider = document.getElementById("adjust-shape").value;
  document.getElementById("output").innerHTML = myShapeSlider;
  var myShape = document.getElementById("my-shape");
  myShape.setAttribute("style", "border-radius: " + myShapeSlider + "%");
}

function btlradius() {
  var myShapeSlider = document.getElementById("adjust-shape-2").value;
  document.getElementById("output").innerHTML = " " + myShapeSlider;
  var myShape = document.getElementById("my-shape");
  myShape.setAttribute(
    "style",
    "border-top-left-radius: " + myShapeSlider + "%"
  );
}

function btrradius() {
  var myShapeSlider = document.getElementById("adjust-shape-3").value;
  document.getElementById("output").innerHTML = myShapeSlider;
  var myShape = document.getElementById("my-shape");
  myShape.setAttribute(
    "style",
    "border-top-right-radius: " + myShapeSlider + "%"
  );
}

function bblradius() {
  var myShapeSlider = document.getElementById("adjust-shape-4").value;
  document.getElementById("output").innerHTML = myShapeSlider;
  var myShape = document.getElementById("my-shape");
  myShape.setAttribute(
    "style",
    "border-bottom-left-radius: " + myShapeSlider + "%"
  );
}

function bbrradius() {
  var myShapeSlider = document.getElementById("adjust-shape-5").value;
  document.getElementById("output").innerHTML = myShapeSlider;
  var myShape = document.getElementById("my-shape");
  myShape.setAttribute(
    "style",
    "border-bottom-right-radius: " + myShapeSlider + "%"
  );
}

function reset() {
  var myShapeSlider = (document.getElementById("adjust-shape").value = 0);
  document.getElementById("output").innerHTML = myShapeSlider;
  var myShape = document.getElementById("my-shape");
  myShape.setAttribute("style", "border-radius: " + myShapeSlider + "%");
}
