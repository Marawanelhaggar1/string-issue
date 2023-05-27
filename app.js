const btn = document.getElementById("btn");
const sum = () => {
  let firstNum = document.getElementById("firstNum").value;
  console.log(firstNum);
  let lastNum = document.getElementById("lastNum").value;
  console.log(lastNum);
  const result = document.getElementById("result");
  let res = parseInt(firstNum) + parseInt(lastNum);
  console.log(res);

  result.innerHTML = res;
  return res;
};

btn.addEventListener("click", sum);
