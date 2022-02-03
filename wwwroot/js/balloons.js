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

    //Assign03 - 2. Trigger live toast if no balloon checkboxes are checked
     $('#submit').on('click', function(e) {
        var isChecked = false;
        // determine if any check boxes are checked
        $('.form-check-input').each(function () {
            if ($(this).prop('checked')){
                isChecked = true;
            }
        });
        if (!isChecked) {
            $('#liveToast').toast({ autohide: false }).toast('show');
        }
    });

});



  
