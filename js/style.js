document.body.onkeydown = function(e){
    console.log(e.keyCode);

    if(e.keyCode==65){
        document.getElementById("a").play();
        document.getElementsByClassName("box")[0].style.boxShadow="0px 0px 7px 4px orange" ;
    }
    else if(e.keyCode==83){
        document.getElementById("s").play();
        document.getElementsByClassName("box")[1].style.boxShadow="0px 0px 7px 4px orange" ;
    }
    else if(e.keyCode==68){
        document.getElementById("d").play();
        document.getElementsByClassName("box")[2].style.boxShadow="0px 0px 7px 4px orange" ;
    }
    else if(e.keyCode==70){
        document.getElementById("f").play();
        document.getElementsByClassName("box")[3].style.boxShadow="0px 0px 7px 4px orange" ;
    }
    else if(e.keyCode==71){
        document.getElementById("g").play();
        document.getElementsByClassName("box")[4].style.boxShadow="0px 0px 7px 4px orange" ;
    }
    else if(e.keyCode==72){
        document.getElementById("h").play();
        document.getElementsByClassName("box")[5].style.boxShadow="0px 0px 7px 4px orange" ;
    }
    else if(e.keyCode==74){
        document.getElementById("j").play();
        document.getElementsByClassName("box")[6].style.boxShadow="0px 0px 7px 4px orange" ;
    }
    else if(e.keyCode==75){
        document.getElementById("k").play();
        document.getElementsByClassName("box")[7].style.boxShadow="0px 0px 7px 4px orange" ;
    }
    else if(e.keyCode==76){
        document.getElementById("l").play();
        document.getElementsByClassName("box")[8].style.boxShadow="0px 0px 7px 4px orange" ;
    }

    document.body.onkeyup = function(e){
        let keycode= document.getElementsByClassName("box")[0].style.boxShadow="0px 0px 7px 4px orange" ;
        for(i=0;i<keycode.length;i++){
            document.getElementsByClassName("box")[i].style.boxShadow="none";                
        }
    };

    };