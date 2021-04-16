var checkbox = document.querySelector('.checkbox-switcher');
var headAnimation = document.querySelector('.animation-wrapper');
var pawAnimation = document.querySelector('.animation-paw');
var speechAnimation= document.querySelector('.speechbubble');
checkbox.addEventListener('click',function(){
    checkbox.checked = true
    headAnimation.classList.add('animation-wrapper--visible');
    speechAnimation.classList.add('speechbubble--visible');
    pawAnimation.classList.add('animation-paw--visible');
    
} );

// pawAnimation.addEventListener('animationend',function(){
//     checkbox.checked = false;
//     headAnimation.classList.remove('animation-wrapper--visible');
//     speechAnimation.classList.remove('speechbubble--visible');
//     pawAnimation.classList.remove('animation-paw--visible');
// });

function removeClasses(){
    checkbox.checked = false;
    headAnimation.classList.remove('animation-wrapper--visible');
    speechAnimation.classList.remove('speechbubble--visible');
    pawAnimation.classList.remove('animation-paw--visible');
};
setTimeout(removeClasses, 4000);