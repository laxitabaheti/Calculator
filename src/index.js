function addition1() {
  let val1 = document.getElementById("num1").value;
  let val2 = document.getElementById("num2").value;
  let v1 = parseFloat(val1);
  let v2 = parseFloat(val2);

  if ((isNaN(v1) || isNaN(v2)) !== true) {
    document.getElementById("result").innerHTML = v1 + v2;
  } else {
    alert("Please insert numbers");
  }
}

function subtraction1() {
  const val1 = document.getElementById("num1").value;
  const val2 = document.getElementById("num2").value;
  const v1 = parseFloat(val1);
  const v2 = parseFloat(val2);
  if ((isNaN(v1) || isNaN(v2)) !== true) {
    document.getElementById("result").innerHTML = v1 - v2;
  } else {
    alert("Please insert numbers");
  }
}

function multiplication1() {
  const val1 = document.getElementById("num1").value;
  const val2 = document.getElementById("num2").value;
  const v1 = parseFloat(val1);
  const v2 = parseFloat(val2);
  if ((isNaN(v1) || isNaN(v2)) !== true) {
    document.getElementById("result").innerHTML = v1 * v2;
  } else {
    alert("Please insert numbers");
  }
}
function division1() {
  const val1 = document.getElementById("num1").value;
  const val2 = document.getElementById("num2").value;
  const v1 = parseFloat(val1);
  const v2 = parseFloat(val2);
  if ((isNaN(v1) || isNaN(v2)) !== true) {
    document.getElementById("result").innerHTML = v1 / v2;
  } else {
    alert("Please insert numbers");
  }
}
function exponention1() {
  const val1 = document.getElementById("num1").value;
  const val2 = document.getElementById("num2").value;
  const v1 = parseFloat(val1);
  const v2 = parseFloat(val2);
  if ((isNaN(v1) || isNaN(v2)) !== true) {
    document.getElementById("result").innerHTML = v1 ** v2;
  } else {
    alert("Please insert numbers");
  }
}
function modulus1() {
  const val1 = document.getElementById("num1").value;
  const val2 = document.getElementById("num2").value;
  const v1 = parseFloat(val1);
  const v2 = parseFloat(val2);
  if ((isNaN(v1) || isNaN(v2)) !== true) {
    document.getElementById("result").innerHTML = v1 % v2;
  } else {
    alert("Please insert numbers");
  }
}
