const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i<=5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic"+i+".jpg");
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener("click", function(e) {
	// e.target is the clicked element!
	
	if(e.target && e.target.nodeName == "IMG") {
		
		displayedImage.setAttribute('src', e.target.src);
	}
});

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", function() {
	
	if (btn.getAttribute('class') === 'dark') {
        btn.textContent = 'Lighten';
        btn.setAttribute('class', 'light');
        
        overlay.setAttribute("style", "background-color:rgba(0,0,0,0.5)");
    } else {
        btn.textContent = 'Darken';
        btn.setAttribute('class', 'dark');
        
        overlay.setAttribute("style", "background-color:rgba(0,0,0,0)");
    }
	
});