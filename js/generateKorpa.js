$(document).ready(function(){

    var htmltext="";
    var ukupno=0;
    for(i=0;i<sessionStorage.length;i++){
        var key=sessionStorage.key(i);
        var niz=sessionStorage.getItem(key);
        var dijelovi = niz.split(",");
        var rijeci=dijelovi[0].split("-");
        htmltext+= "<tr><td>";
        for(j=0;j<rijeci.length;j++){
            htmltext+=rijeci[j]+" ";
        }        
        htmltext+="</td><td>"+ dijelovi[1] +" KM</td>";
        htmltext+= "</td></tr>";
        ukupno+=parseInt(dijelovi[1],10);
        
    }
    if(htmltext!="")
        htmltext+="<tr id='last'><td></td><td>Ukupno: "+ukupno+" KM</td></tr>"
    $("#tabela").html(htmltext);
    
});