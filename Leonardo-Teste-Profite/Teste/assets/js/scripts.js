$(window).on("load resize",function(e){
    if ($(window).width() > 991) {
        $('.carrinho-compras').remove().insertAfter($('.minha-conta'));
    } else {
        $('.carrinho-compras').remove().insertBefore($('.search'));
    }
});
$(function() {
    $('.example').barrating({
      theme: 'fontawesome-stars'
    });
 });
  