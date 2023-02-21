jQuery(document).ready(function () {

  jQuery('.tab_wrap li').on('click', function () {
    jQuery(this).addClass('on').siblings().removeClass('on');

    if (jQuery(this).hasClass('tab1')) {
      jQuery('.tabs .tab1 .conts_tab1-1').addClass('on').siblings().removeClass('on');
      jQuery('.container .conts_tab1-1').show().siblings().hide();
      jQuery('.tabs .tab1').show().siblings().hide();
    } else if (jQuery(this).hasClass('tab2')) {
      jQuery('.tabs .tab1 .conts_tab2-1').addClass('on').siblings().removeClass('on');
      jQuery('.container .conts_tab2-1').show().siblings().hide();
      jQuery('.tabs ul').hide();
    }
  });

});