const scale = 2.0

Stage({
  name: 'background',
  image: 'images/In the style of.png'
});

// Create and start an application
Stage(function(stage, display) {
    // Set viewbox for stage, see pinning for valid modes
    stage.viewbox(400, 600);
  
    // Listen to view port resize events
    stage.on('viewport', function(viewport) {
      // `viewport` attributes are `width`, `height` and `ratio`
    });
  
    
    Stage.image('background').appendTo(stage).pin({'handle': 0.0, 'scale': scale});
    // Pause playing
    stage.pause();
  
    // Resume playing
    stage.resume();
  });