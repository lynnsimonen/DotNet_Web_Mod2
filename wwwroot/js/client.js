$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
         // first pause the audio (in case it is still playing)
         toast.pause();
         // reset the audio
         toast.currentTime = 0;
        // play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');

     // Display the product name and discount code in the toast (use data- attributes)
     $('#product').html($(this).data('product'));
     $('#code').html($(this).data('code'));    

    });
 

    
});


//------------------

// <!-- toast -->
//     <div id="toast" class="toast">
//         <div class="toast-header">
//             <strong class="mr-auto" id="product">Product Name</strong>
//             <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//             </button>
//         </div>
//         <div class="toast-body">
//             Discount Code: <strong id="code">CODE</strong>
//         </div>
//     </div>