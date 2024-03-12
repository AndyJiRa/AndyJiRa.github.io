$('document').ready(function () {
    const loadCarouselImage = function ($el) {
        let url = $el.data('url');
    
        $el.html(function () {
            let $img = $('<img />', {
                'src': url
            });
            $img.addClass('d-block w-100');
                    
            return $img;
        });
    ;

    const init = function () {
        let $firstCarousel = $('#carousel .carousel-item:first');
        loadCarouselImage($firstCarousel);
        $firstCarousel.addClass('active');

        $('#productsCarousel').carousel({
            interval: 5000
        });
     };

     $('#carousel').on('slid.bs.carousel', function () {
         loadCarouselImage($('#carousel .carousel-item.active'));
     });

     init();
