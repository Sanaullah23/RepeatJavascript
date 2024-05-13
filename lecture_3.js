/*
now let's create a simple counter program in javascript
1--> create html elements so that when get that and set values
2--> assign unique id's them 
3--> style buttons and counters in css
4-- create javascript program
*/
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const reset = document.getElementById('resetBtn');

let count=0;

increaseBtn.onclick=function(){
    count++;
    document.getElementById('counter').textContent=count
}
decreaseBtn.onclick=function(){
    if (count===0) {
        alert('can not decrease further it')
    }
    else{
    count--;
    document.getElementById('counter').textContent=count
    }
}

reset.onclick=function(){
    count=0;
    document.getElementById('counter').textContent=count
}
