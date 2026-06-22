// http://gsap.com/

const timeline = gsap.timeline({
  paused: true,
})

// *****************
// MARK: Drag
// *****************

Draggable.create('.article-homepage', {
    type: "x,y",
    bounds: document.querySelector('main'),
    inertia: true,
    onPress: function(){
      // Stop de phisics animatie
      gsap.killTweensOf(this.target);

      gsap.set(this.target, { opacity: 1, zIndex: 10 });
    },
    onRelease: function() {
        gsap.set(this.target, { zIndex: 1 });
    }
});

// *****************
// MARK: Scrambletekst
// *****************

// https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
if(window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  gsap.to('h1', {
    duration: 3, 
    scrambleText: "Meesterschapsblog van Sabrina"
  });
}