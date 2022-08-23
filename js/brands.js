
///////brandtab///////////

$(document).ready(function() {
   $('.brands-tab ul li a').click(function(){
   
      $('.panel').hide();
      $('.brand-list li a.active').removeClass('active');
      $(this).addClass('active');
      
      var panel = $(this).attr('href');
      $(panel).fadeIn(1000);
      
      return false;   
     
   });   
      $('.tabs li:first a').click();
 });  
//////////////////////fileuplod/////////////

$(document).ready(function(e) {
   $(".baseColor #colorPicker").click(function(){
      $(".brand-color ").addClass("acvtive");
  
  
   });

});




$(document).ready(function(e) {
   $(".showonhover").click(function(){
    $("#files-upload").trigger('click');
    $(".imagediv, .brands-logo ").addClass("intro");


 });
});


var input = document.querySelector('input[type=file]'); // see Example 4

input.onchange = function () {
var file = input.files[0];

drawOnCanvas(file);   // see Example 6
displayAsImage(file); // see Example 7
};

function drawOnCanvas(file) {
var reader = new FileReader();

reader.onload = function (e) {
var dataURL = e.target.result,
   c = document.querySelector('canvas'), // see Example 4
   ctx = c.getContext('2d'),
   img = new Image();

img.onload = function() {
 c.width = img.width;
 c.height = img.height;
 ctx.drawImage(img, 0, 0);
};

img.src = dataURL;
};

reader.readAsDataURL(file);
}

function displayAsImage(file) {
var imgURL = URL.createObjectURL(file),
 img = document.createElement('img');

img.onload = function() {
URL.revokeObjectURL(imgURL);
};

img.src = imgURL;
 document.body .appendChild(img);
$("body script + img").detach().appendTo(".uplodeimg");
}

$("#upfile1").click(function () {
$("#file1").trigger('click');
});
$("#upfile2").click(function () {
$("#file2").trigger('click');
});
$("#upfile3").click(function () {
$("#file3").trigger('click');
});



/////////////////////////////////////////
// Color Picker
$(document).ready(function() {
const body = document.querySelector(".uplode.upcoloradd");
const input = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");

setColor();
input.addEventListener("input", setColor);

function setColor() {
	body.style.backgroundColor = input.value;
	colorCode.innerHTML = input.value;
}
});
