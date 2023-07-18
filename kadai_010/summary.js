$(function() {

  $("#change-color").click(function() {
  //クリックしたら文字色を赤字にする
    $("#target").css('color', 'red');
 });

  $("#change-text").click(function() {
    //クリックしたら文字内容変化する
      $("#target").text('Hello!');
   });

   $("#fade-out").on('click', function () {
    // フェードアウトする
    $("#target").css('opacity', 0);
  });

  $("#fade-in").on('click', function () {
    // フェードインする
    $("#target").css('opacity', 1);
  });
});