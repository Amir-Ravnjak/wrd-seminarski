

$(".kupi").click(function(){

   $(this).parent().closest('div').css("display","none");
   provjera($(this).parent().closest('div').parent());
})

$(".btn").click(function(){
    var CSS = $(this).next('div').css("display");
    if(CSS == "none"){
        
            $(this).next('div').css( "display", "flex" );
            
            var btnNiz = $(this).text().split(" ");
            var btn = btnNiz[0];
            $(this).html(btn + " &emsp;&ensp;  -");    
        
        }
    else{

            $(this).next('div').css( "display", "none" );

            var btnNiz = $(this).text().split(" ");
            var btn = btnNiz[0];
            $(this).html(btn  + " &emsp;&ensp;  +"); 
        }
    
        
 })


 function provjera(e){
    var none = true;

    $(e).children().each(function(i){
        if($(this).css("display")=="flex" || $(this).css("display") == "block")
            none=false;
    });

    if(none==true){
        $(e).html("Trenutno nema "+ e.attr("helper") +" za prodaje.");
    }
    
 };