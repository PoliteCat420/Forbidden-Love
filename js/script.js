function openPage(pageUrl){
    window.location.href = pageUrl;
  }

function openPageNew(pageUrl){
window.open(pageUrl);
}
// var x = document.getElementById('mood').autoplay;

var ouchaudio = $("#song")[0];
$("#mood").on('mouseenter', function(){
  ouchaudio.play();
});