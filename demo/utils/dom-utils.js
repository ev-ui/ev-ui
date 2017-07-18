export default{
    fullscreen:(e)=>{
        if(e.requestFullScreen){
            e.requestFullscreen();
        }else if(e.mozRequestFullScreen){
            e.mozRequestFullscreen();
        }else if(e.webkitRequestFullScreen){
            e.webkitRequestFullscreen();
        }else if(e.msRequestFullScreen){
            e.msRequestFullscreen();
        }
    },
    exitFullscreen:()=>{
        if(document.exitFullscreen){
            document.exitFullscreen();
        }else if(document.mozExitFullscreen){
            document.mozExitFullscreen();
        }else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        }
    },
    
}