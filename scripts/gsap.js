// http://gsap.com/

const timeline = gsap.timeline({
  paused: true,
})


// *****************
// MARK: physics
// *****************

// const shootPoint = document.querySelector('.shoot-point');
// const angle = 20;
// const bullets = document.querySelectorAll('.article-homepage');
// const bulletContainer = document.querySelector('.bullet-container'); 

// // initiate the animation of the shooter
// const timeline1 = gsap.timeline().to(shootPoint, {
//   rotation: -angle,
//   duration: 0.65,
//   ease: 'power1.out',
// }).to(shootPoint, {
//   rotation: angle,
//   ease: 'power1.out',
//   duration: 1,
//   repeat: 3,
//   yoyo:true,
// }).to(shootPoint, {
//   rotation: 0,
//   duration: 0.65,
//   ease: 'power1.out',
// });

// // define the time of the whole animation
// const timeline1Time = timeline1.duration()

// const timeline2 = gsap.timeline().to(bullets, {
//   opacity: 1,
//   duration: 0.25,
//   stagger: {
//     amount: timeline1Time,
//   }
// }).to(bullets, {
//   duration: timeline1Time,
//   physics2D: {
//     velocity: "random(600, 850)",
//     angle: () => 270 + gsap.getProperty(shootPoint, "rotation"),
//     gravity: 10
//   },
//   stagger: {
//     amount: timeline1Time
//   }
// }, 0
// );

// timeline.add(timeline1,0).add(timeline2, 0).play();

// window.addEventListener("click", () => 
// timeline.restart());

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