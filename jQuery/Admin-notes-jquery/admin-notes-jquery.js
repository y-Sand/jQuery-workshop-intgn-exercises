/****RestAPI CRUD Operations****/
// ajax, essentially an obj taking values -> to construct the request

// GET
function getNotes() {
    let endpoint = "http://localhost:3000/notes"
    $.ajax({
        url: endpoint,
        contentType: "application/json",
        dataType: 'json',
        type: 'GET',
        // notesList, nombre del objeto resultado
        success: function (notesList) {
            console.log(notesList);
            viewNotes(notesList);
        },
        // if the call fails...
        erorr: function (notesList) {
            console.log("La llamada no se pudo completar");
            console.log(notesList);
        }

    });
};
// DISPLAY, viewNotes(response-from-getNotes)
function viewNotes(notesList) {
    $('#notes-tbody').empty();
    notesList.forEach(note => {
        let newNote =
            `<tr id = ${note._id}>
                <td>  ${note.title}</td>
                <td>  ${note.content}</td>
                <td>  <input id = "btn-editnote" type = "button" value= "Edit"/>
                      <input id = "btn-deletenote" type = "button" value = "Delete">
                </td>
            </tr>`;
        $('#notes-tbody').append(newNote);
    })
};

//DELETE
function deleteNote(thisNote) {
    var id = $(thisNote).attr("id");

    $.ajax({
        url: "http://localhost:3000/notes/" + id,
        dataType: 'json',
        type: 'DELETE',
        data: $(`tr #${id}`).val(),
        success: function (data) {
            console.log(data);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        },
        complete: function () {
            getNotes();
        }
    });
};

// POST
function addNote() {
    let title = $('#txt-title').val();
    let content =$('#txt-content').val();
    $.ajax({
        type: "post",
        url: "http://localhost:3000/notes",
        contentType: "application/json",
        dataType: 'json',
        success: function () {
            title;
            content;
            alert("note create succesfull");
        },
        error: function () {
            alert("No se creo la nota");
        },
        complete: function () {
            getNotes();
        }
    });
};

// EVENTS
$(document).ready(function () {
    getNotes();
    $("#btn-editnote").click(function () {
        editNote();
    });
    $("#btn-deletenote").click(function () {
        deleteNote(this);
    });
    $("#btn-addnote").click(function () {
        addNote();
    });

});

/****EVENTS****/
// $(() => {
//     // Delete an item
//     $('#btn-delete').click(function () {
//         let obj = $(this).parents("tr");

//         $.ajax({
//             url: "http://localhost:3000/notes/" + id,
//             type: 'DELETE',
//             success: function () {
//                 console.log(obj);
//                 $(obj).remove();
//                 alert("Item deleted successfully");
//             },
//             error: function (request, message, error) {
//                 handleException(request, message, error);
//             },
//             complete: function(){
//                 getNotes();
//             }
//         });
//     });

// });

/* Remove Item */
// $("body").on("click",".remove-item",function(){
//     var id = $(this).parent("td").data('id');
//     var c_obj = $(this).parents("tr");


//     $.ajax({
//         dataType: 'json',
//         type:'POST',
//         url: url + 'api/delete.php',
//         data:{id:id}
//     }).done(function(data){
//         c_obj.remove();
//         toastr.success('Item Deleted Successfully.', 'Success Alert', {timeOut: 5000});
//         getPageData();
//     });


// });








