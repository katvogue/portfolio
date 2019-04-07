    /**
     * [stickyWidget description]
     * @param  {[type]} $widget [description]
     * @return {[type]}         [description]
     */
    function stickyWidget ($widget) {
        $widget.each(function() {
            var $this = $(this);

            $win.on('scroll', function() {
                var headerH = $('.header').outerHeight();
                var scrollTop = $win.scrollTop();

                if ( scrollTop > 1 ) {
                    $this.toggleClass('fixed', $this.offset().top - headerH < scrollTop );
                    $this.toggleClass('at-bottom', $this.offset().top + $this.height() < scrollTop + $win.height() );
                } else if (scrollTop == 0) {
                    $this.removeClass('fixed');
                }
            });
        });
    }
    /** Scrol spy */
    $('body').scrollspy({ target: '#product-inner' })