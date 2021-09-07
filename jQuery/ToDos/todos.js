$( document ).ready(function() {
    let endpoint = "https://jsonplaceholder.typicode.com/todos"
        $.ajax({
            url: endpoint,
            contentType: "application/json",
            dataType: 'json',
            type: 'get',
            //result nombre del objeto que le quieras poner al resultado
            success: function(resultado){
                console.log(resultado);
                resultado.forEach(row =>{
                    let newRow = '<tr>'+
                   '<td>'+row.id+'</td>'+
                   '<td>'+row.title+'</td>'+
                   '<td>'+row.completed+'</td>'+
                   '</tr>';
                   $('table').append(newRow);
                   $('td:nth-child(3):contains(true)').parent().addClass('completed-task');
                   $('td:nth-child(3):contains(false)').css('color', 'red');
                })
            },
            //que hacer cuando falla la llamada 
            erorr: function(resultado){
                console.log("La llamada no se pudo completar");
                console.log(resultado);
            }
    });
  });

  