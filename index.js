function roll(){
    document.querySelector(".first p").innerHTML =Math.floor(Math.random()*5)+1;

    document.querySelector(".second p").innerHTML = Math.floor(Math.random()*5)+1;

    if (document.querySelector(".first p").innerHTML > document.querySelector(".second p").innerHTML ){
        document.querySelector(".winner p").innerHTML =" Winner : Player 1";

    } else if (document.querySelector(".first p").innerHTML === document.querySelector(".second p").innerHTML ){

        document.querySelector(".winner p").innerHTML ="Winner : Its a draw game";
    }
    
    else {document.querySelector(".winner p").innerHTML ="Winner : Player 2";

    }
}



