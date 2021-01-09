jQuery(document).ready(function(){
    
    jQuery('.tab_wrap li').on('click',function(){
        jQuery(this).addClass('on').siblings().removeClass('on');
            
        if( jQuery(this).hasClass('tab1')){
            jQuery('.tabs .tab1 .conts_tab1-1').addClass('on').siblings().removeClass('on');
            jQuery('.container .conts_tab1-1').show().siblings().hide();
            jQuery('.tabs .tab1').show();
            jQuery('.tabs .tab2').hide();
        }else if( jQuery(this).hasClass('tab2')){
            jQuery('.tabs .tab2 .conts_tab2-1').addClass('on').siblings().removeClass('on');
            jQuery('.container .conts_tab2-1').show().siblings().hide();
            jQuery('.tabs .tab1').hide();
            jQuery('.tabs .tab2').show();
        }
    });
    
    jQuery('.tabs .tab1 li').on('click',function(){
        jQuery(this).addClass('on').siblings().removeClass('on');
       
        if(jQuery(this).hasClass('conts_tab1-1')){
            jQuery('.container .conts_tab1-1').show().siblings().hide();
        }else if(jQuery(this).hasClass('conts_tab1-2')){
             jQuery('.container .conts_tab1-2').show().siblings().hide();
        }else if(jQuery(this).hasClass('conts_tab1-3')){
             jQuery('.container .conts_tab1-3').show().siblings().hide();
        }else if(jQuery(this).hasClass('conts_tab1-4')){
             jQuery('.container .conts_tab1-4').show().siblings().hide();
        }
        
    });
    jQuery('.tabs .tab2 li').on('click',function(){
        jQuery(this).addClass('on').siblings().removeClass('on');
        
        if(jQuery(this).hasClass('conts_tab2-1')){
            jQuery('.container .conts_tab2-1').show().siblings().hide();
        }else if(jQuery(this).hasClass('conts_tab2-2')){
             jQuery('.container .conts_tab2-2').show().siblings().hide();
        }
    });
    
    
    
});