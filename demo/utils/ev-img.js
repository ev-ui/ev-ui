window.onload=function(){
    let ev_imgs=document.getElementsByClassName('ev-img');
    for(let i=0;i<ev_imgs.length;i++){
        let ev_img=ev_imgs.item(i);
        if(ev_img.tagName.toLowerCase()!=='img'){
            continue;
        }
        
        var width=ev_img.width;
        var height=ev_img.height;

        let div=document.createElement('div');

        div.className=ev_img.getAttribute('class');

        div.style.width=width+'px';
        div.style.height=height+'px';
        div.style.backgroundImage="url("+ev_img.src+")";
        div.style.backgroundRepeat='no-repeat';
        div.style.backgroundPosition="center";
        div.style.backgroundSize="100%";
        
        ev_img.parentNode.replaceChild(div,ev_img);
    }
}