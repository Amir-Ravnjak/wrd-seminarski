

$(".kupi").click(function(){
    
    
    var e = $(this).parent().closest('div');

    var ime = e.attr("id");
    var value=e.attr("value");

    if(sessionStorage.getItem(ime)!=null){
        e.css("display","none");
        return;
    }

    var niz = [ime, value] 

    sessionStorage.setItem(ime, niz);

 })

 

 $(document).ready( 
    function (){


        for(i=0;i<sessionStorage.length;i++){
            var ime = sessionStorage.key(i);
            var id="#"+ime;
            if(ime!=null){
               $(id).css("display","none");
            }
        }

        provjera($("#app"));
        provjera($("sw"));
        provjera($("hw"));
        
     }
 ); 

 