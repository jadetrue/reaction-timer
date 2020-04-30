			var start = new Date().getTime();
			
			function timerReappear() {
			
				var top = Math.random() * 450;
				var left = Math.random() * 750;
				var width = (Math.random() * 50) + 50;
				
				if (Math.random() > 0.5) {
					document.getElementById("shape").style.borderRadius = "50%";
				} else {
					document.getElementById("shape").style.borderRadius = "5px";
				}
				
				document.getElementById("shape").style.top = top + "px";
				document.getElementById("shape").style.left = left + "px";
				document.getElementById("shape").style.width = width + "px";
				document.getElementById("shape").style.height = width + "px";
			
				document.getElementById("shape").style.display = "block";
				
				start = new Date().getTime();
			}
			
			function appearAfterDelay() {
				setTimeout(timerReappear, Math.random() * 2000);
			}
			
			appearAfterDelay();
			
			document.getElementById("shape").onclick = function() {
				
				document.getElementById("shape").style.display = "none";
				
				var end = new Date().getTime();
				var timeTaken = (end - start) / 1000;
				
				document.getElementById("yourTime").innerHTML = timeTaken + "s";
				
				appearAfterDelay();
			}