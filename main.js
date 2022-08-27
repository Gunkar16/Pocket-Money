v1=3000;
v2=1000;
v3=4000;
v4=2000;
v5=8000;
v6=6000;
v7=600;
v8=0;
v9=0;


var Total = 0;

c1=document.getElementById("c1");
c2=document.getElementById("c2");
c3=document.getElementById("c3");
c4=document.getElementById("c4");
c5=document.getElementById("c5");
c6=document.getElementById("c6");
c7=document.getElementById("c7");
c8=document.getElementById("c8");
c9=document.getElementById("c9");

function check1(){
    if(document.getElementById("c1").checked == true){
        Total=Total+v1;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(document.getElementById("c1").checked == false){
        Total=Total-v1;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(Total>9500){
        document.getElementById("cost").innerHTML="AMOUNT OVER BUDGET ❌"
    }
    else{
        document.getElementById("cost").innerHTML="AMOUNT IN BUDGET ✅"

    }

}
    function check2(){
    if(document.getElementById("c2").checked == true){
        Total=Total+v2;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(document.getElementById("c2").checked == false){
        Total=Total-v2;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(Total>9500){
        document.getElementById("cost").innerHTML="AMOUNT OVER BUDGET ❌"
    }
    else{
        document.getElementById("cost").innerHTML="AMOUNT IN BUDGET ✅"

    }
    }
    function check3(){
    if(document.getElementById("c3").checked == true){
        Total=Total+v3;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(document.getElementById("c3").checked == false){
        Total=Total-v3;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(Total>9500){
        document.getElementById("cost").innerHTML="AMOUNT OVER BUDGET ❌"
    }
    else{
        document.getElementById("cost").innerHTML="AMOUNT IN BUDGET ✅"

    }
}
    function check4(){
    if(document.getElementById("c4").checked == true){
        Total=Total+v4;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(document.getElementById("c4").checked == false){
        Total=Total-v4;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(Total>9500){
        document.getElementById("cost").innerHTML="AMOUNT OVER BUDGET ❌"
    }
    else{
        document.getElementById("cost").innerHTML="AMOUNT IN BUDGET ✅"

    }
}
    function check5(){
    if(document.getElementById("c5").checked == true){
        Total=Total+v5;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(document.getElementById("c5").checked == false){
        Total=Total-v5;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(Total>9500){
        document.getElementById("cost").innerHTML="AMOUNT OVER BUDGET ❌"
    }
    else{
        document.getElementById("cost").innerHTML="AMOUNT IN BUDGET ✅"

    }
}
    function check6(){
    if(document.getElementById("c6").checked == true){
        Total=Total+v6;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(document.getElementById("c6").checked == false){
        Total=Total-v6;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(Total>9500){
        document.getElementById("cost").innerHTML="AMOUNT OVER BUDGET ❌"
    }
    else{
        document.getElementById("cost").innerHTML="AMOUNT IN BUDGET ✅"

    }
}
    function check7(){
    if(document.getElementById("c7").checked == true){
        Total=Total+v7;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(document.getElementById("c7").checked == false){
        Total=Total-v7;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(Total>9500){
        document.getElementById("cost").innerHTML="AMOUNT OVER BUDGET ❌"
    }
    else{
        document.getElementById("cost").innerHTML="AMOUNT IN BUDGET ✅"

    }
}
    function check8(){
    if(document.getElementById("c8").checked == true){
        Total=Total+v8;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(document.getElementById("c8").checked == false){
        Total=Total-v8;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(Total>9500){
        document.getElementById("cost").innerHTML="AMOUNT OVER BUDGET ❌"
    }
    else{
        document.getElementById("cost").innerHTML="AMOUNT IN BUDGET ✅"

    }
}
    function check9(){
    if(document.getElementById("c9").checked == true){
        Total=Total+v9;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(document.getElementById("c9").checked == false){
        Total=Total-v9;
        console.log(Total);
        document.getElementById("total").innerHTML=Total;
    }
    if(Total>9500){
        document.getElementById("cost").innerHTML="AMOUNT OVER BUDGET ❌"
    }
    else{
        document.getElementById("cost").innerHTML="AMOUNT IN BUDGET ✅"

    }
}

