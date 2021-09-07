$(() => {
//   $('#btn-submit').click((event)=>{
//     // una cadena vacia evalua como falso, viceversa: if($('#mail').val() == "" )
//     if($(!'#name').val()) alert('Name required');
//     if($(!'#mail').val()) alert('Mail required');
//     if($(!'#msg').val()) alert('Message required');

//     else alert('mensaje enviado');
//     event.preventDefault(); 
//     }); 

$('#btn-submit').click( function (event){
    event.preventDefault(); 
    $('#form input, #form textarea').each(function(){
        console.log($(this).val());
        if(!$(this).val()) 
            alert($(this.id.val())+ "is required"); // REVISAR SINTAXIS
    });
    alert('mensaje enviado');
});                                                      
})