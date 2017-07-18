window.onload=function(){
	Array.prototype.slice.call(document.getElementsByClassName('ripple'),0).map(item=>{
		item.onmousedown=function(e){
			Array.prototype.slice.call(document.getElementsByClassName('ripple-layer'),0).map(layer=>{
				layer.parentNode.removeChild(layer);
			})
			var size=Math.max(item.offsetWidth,item.offsetHeight);
			var x=e.offsetX || e.layerX;
			var y=e.offsetY || e.layerY;
			var rippleLayer=document.createElement('div');
			rippleLayer.className='ripple-layer';
			rippleLayer.style.height=size+"px";
			rippleLayer.style.width=size+"px";
			rippleLayer.style.left=x-size/2+"px";
			rippleLayer.style.top=y-size/2+"px";
			item.appendChild(rippleLayer);
		}
	})
}