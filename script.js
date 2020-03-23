paper.install(window);
window.onload = function() {
		paper.setup('myCanvas');
		//creates drawing tool
		var tool = new Tool();
		var path;

		// Define a mousedown and mousedrag handler
		tool.onMouseDown = function(event) {
			path = new Path();
    
			path.strokeColor = 'black';
			path.add(event.point);
		}
		tool.onMouseDrag = function(event) {
			path.add(event.point);
		}
	}
//clears the current canvas - used for the clear button
function clearDrawing() {
  paper.project.activeLayer.removeChildren();
  paper.view.draw();
}

//clears canvas and removes ad
function finish(){
  paper.project.activeLayer.removeChildren();
  paper.view.draw();
  
  document.getElementById('AD1').style.visibility = 'hidden'; 
  
  document.getElementById('videoPlayerOff').style.visibility = 'hidden'; 
}