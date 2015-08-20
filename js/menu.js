(function($, openedMenuClass) {
  'use strict';

  $(function() {
    var $globalMenu = $('#global_menu'),
        $mobileContainer = $globalMenu.find('.mobile'),
        $mobileSubMenusContainer = $mobileContainer.find('.mobile-submenu'),
        $mobileSubMenus = $mobileSubMenusContainer.find('.submenu');

    $mobileContainer.find('.mobile-menu').on('change', function() {
      $mobileSubMenus.eq(this.value - 1).show().siblings().hide();
    });

    $mobileSubMenusContainer.find('.trigger').on('click', function() {
      $mobileSubMenusContainer.toggleClass(openedMenuClass);
    });

    $(this).on('click', function(event) {
      if (!$(event.target).closest($globalMenu).length) {
        $mobileSubMenusContainer.removeClass(openedMenuClass);
      }
    });
  });
})(jQuery, 'opened');
