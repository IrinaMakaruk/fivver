const hideIconsContainer = () => $('.social-icons-container').hide();
const showIconsContainer = () => $('.social-icons-container').delay(200).fadeIn(0);


(($) => {
    $('.search-icon-container').hover(hideIconsContainer, showIconsContainer);
    $('.dropdown').hover(
        function() {
            $(this).find('.dropdown-menu').first().fadeIn('slow');
        },
        function() {
            $(this).find('.dropdown-menu').first().slideUp('fast')
        }
    );
})(jQuery);