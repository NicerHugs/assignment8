$(".accordion>div").on("click", function() {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});
