let count = 0;
function increasingButton(){
  const plusButton = document.getElementById('count');
  count += 1;
  plusButton.innerText = count;
}

const minusButton = document.getElementById('btn-minus');
minusButton.addEventListener('click',function(){
  const decreasePoint = document.getElementById('count');
  count -= 1;
  decreasePoint.innerText = count;
})