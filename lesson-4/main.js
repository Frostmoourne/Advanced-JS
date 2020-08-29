'use strict';

// замена без учета конструкций "n't"
//let text = document.querySelector('#text');
//text.innerHTML = text.innerHTML.replace(/'/ig, '"');


//замена с "n't"
let newText = document.querySelector('#text');
newText.innerHTML = newText.innerHTML.replace(/\B'/ig, '"');
