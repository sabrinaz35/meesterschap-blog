Draggable.create('.article-homepage', {
    type: "x,y",
    bounds: document.querySelector('main'),
    inertia: true,
});

gsap.to('h1', {
  duration: 3, 
  scrambleText: "Meesterschapsblog van Sabrina"
});
