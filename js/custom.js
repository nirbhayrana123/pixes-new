
$(document).ready(function(){
	
   $('.Mobileteb  li').on('click', function() {
	 var id =  jQuery(this).attr("data-id");
           jQuery('.tabpanel').css('display','none');
            jQuery('#'+id).css('display','block');
            jQuery('.Mobileteb  li').removeClass('active');         
            jQuery(this).addClass('active');            
             //jQuery('.righttabpanel ul li.comn a span').html(id);


  });
  function myFunction() {
         window.location.href="http://programminghead.com";  
       }
  
});

//////////////////////////////

$(document).ready(function() {
  $('.taballitem a').click(function(){
  
     $('.panel').hide();
     $('.taballitem a.active').removeClass('active');
     $(this).addClass('active');
     
     var panel = $(this).attr('href');
     $(panel).fadeIn(1000);
     
     return false;   
    
  });  
     $('.tabs li:first a').click();
});  
