const drumlength=document.querySelectorAll('.drum').length;
console.log(drumlength);
for(let i=0;i<drumlength;i++){
    document.querySelectorAll('.drum')[i].addEventListener("click",function(e){
        makeNoise(this.innerHTML);
        animationButtons(this.innerHTML)

    })
}
function makeNoise(key){
    switch(key){
        case 'a':
            const a1=new Audio("songs/a.mp3")
            a1.play();
            break;
            case 'b':
                const b1=new Audio("songs/a.mp3")
                b1.play();
                break;
                case 'p':
            const p1=new Audio("songs/a.mp3'")
            p1.play();
            break;
            case 's':
            const s1=new Audio("songs/a.mp3")
            s1.play();
            break;
            default:
                console.log(key);

    }
}
function animationButtons(key){
   const activebuut= document.querySelector('.${key}')
   console.log(activebuut);
    activebuut.classList.add("pressed");
    setTimeout(() => {
        activebuut.classList.remove("pressed");
    }, 500);
}