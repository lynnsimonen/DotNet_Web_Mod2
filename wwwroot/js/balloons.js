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

    //Assign03 - 1. Randomize the attention seeker in balloons.html. 
    //Choose a random animate.css attention seeker and apply when the page loads using JavaScript.    
    var arr = ['bounce','pulse','flash','swing','tada','jello','wobble'];
    var randomarr = arr[Math.floor(Math.random()*arr.length)];
    $('#happybday').removeClass().addClass('animate__animated animate__' + randomarr)
    //$('#array').html(arr.toString());
    

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

    //Assign03 - 3. Add ability to check / uncheck all balloons with a single click (using a button, checkbox, link, etc…)
    $('#checkall').click(function(){
        $('input[type=checkbox]').prop("checked",$('#checkall').is(':checked'));    
        });


    //Assign01 - 4. Hovering the mouse over a checkbox label should change the color of the h1 element (Happy Birthday!) 
    //to the balloon color indicated in the label. Moving the mouse out of the label should reset the color.

});



   /*  $(document).ready(function(){
       
    }); */


  
