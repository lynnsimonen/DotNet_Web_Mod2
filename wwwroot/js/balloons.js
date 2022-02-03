$(function(){
    $('#birthday').pickadate({ format: 'd mmmm' });

    
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

     // event listener for check/uncheck
     $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    // //Trigger live toast if no balloon checkboxes are checked
    // var toastTrigger = document.getElementById('submit')
    // var toastLiveExample = document.getElementById('liveToast')
    // if (toastTrigger) {
    //     toastTrigger.addEventListener('click', function () {
    //     var toast = new bootstrap.Toast(toastLiveExample)

    //     toast.show()
    // })
    // }


});