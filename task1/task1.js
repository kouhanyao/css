
window.onload=function () {

     var aTd=document.getElementsByTagName("td");
     setInterval(change, 1000);

    function change() {
        var oColor=color();
        do{
            var  iNum = parseInt(Math.random()*10);
        }
        while(iNum==9);
        aTd[iNum].style.background=oColor;
        for(var j=0;j<9;j++)
        {
            if(j!==iNum)
            {
                aTd[j].style.background="yellow";
            }
        }
        console.log("格子%d变成了%s",iNum+1,oColor);
    }
    function color () {
        var i=Math.random();
        if(i<=0.333){
            return "red";
        }
        else if(i<=0.666){
            return "blue";
        }
        else{
            return "green";
        }
    }
};