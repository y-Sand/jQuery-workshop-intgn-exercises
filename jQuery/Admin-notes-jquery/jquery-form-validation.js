$(() => {
  $('#btn-add-note').click((event)=>{
    //event.preventDefault(); 
    if($(!'#title').val()||$(!'#content').val()) {
      event.preventDefault(); 
      alert('Empty required fields');
    }
    else {
      let newRow = `<tr id =${_id}.val>
                 <td> ${title}</td>
                 <td>${content}</td>
                 <td>
                      <a href ="note-form.html">Edit</a>
                      <button id = delete>Delete</button>
                  </td>
                 </tr>`;
                 $('#notes-list').append(newRow);
      alert('Nota agregada');
    }
    }); 
                                                    
})