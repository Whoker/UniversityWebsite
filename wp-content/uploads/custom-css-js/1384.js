<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(window).on("scroll", function() {
    if(jQuery(window).scrollTop() > 80) {
        jQuery(".ast-main-header-wrap, .menu-item").addClass("active");
      //final CSS class will be .ast-main-header-wrap.active, and .menu-item.active
    } else {
     
      jQuery(".ast-main-header-wrap, .menu-item").removeClass("active");
      // If above condition (scroll>80pixels) is not met then CSS become .ast-main-header-wrap, and .menu-item.
    }
});</script>
<!-- end Simple Custom CSS and JS -->
