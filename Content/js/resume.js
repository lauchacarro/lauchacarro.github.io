
function saltar(e) {
    tecla = document.all ? e.keyCode : e.which;
    if (tecla === 13) IniciarSession();
}

jQuery(document).ready(function () {


    $("#showpassword").on('click', function () {

        var pass = $("#password");
        var fieldtype = pass.attr('type');
        if (fieldtype === 'password') {
            pass.attr('type', 'text');
            $(this).text("Hide Password");
        } else {
            pass.attr('type', 'password');
            $(this).text("Show Password");
        }


    });



    $("#BtnUploadFile").on('click', function () {
        var formData = new FormData();
        var totalFiles = document.getElementById("FileUpload").files.length;
        for (var i = 0; i < totalFiles; i++) {
            var file = document.getElementById("FileUpload").files[i];

            formData.append("FileUpload", file);
        }
        $("#ajax-alert").removeClass("alert alert-success");
        $("#ajax-alert").removeClass("alert alert-danger");
        $("#ajax-alert").empty();
        $body = $("body");
        $body.addClass("loading"); 
        $.ajax({
            type: "POST",
            url: '/Admin/UpdateFile',
            data: formData,
            dataType: 'json',
            contentType: false,
            processData: false,
            complete: function (response) {

            },
            success: function (response) {
                $body.removeClass("loading");
                $("#ajax-alert").addClass("alert alert-success").append("<strong>Success!</strong> Se Subio El Archivo Correctamente.");
                $("#ajax-alert").alert();
                $("#ajax-alert").fadeTo(5000, 5000).slideUp(4000, function () {
                });
            },
            error: function (error) {
                $body.removeClass("loading");
                $("#ajax-alert").addClass("alert alert-danger").append("<strong>Danger!</strong> Hubo un error.");
                $("#ajax-alert").alert();
                $("#ajax-alert").fadeTo(5000, 5000).slideUp(4000, function () {
                });
            }

        });
        
    });





});
