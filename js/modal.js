var $modalTrigger = $('.modal__trigger-btn'),
    $modal = $('.modal'),
    $modalClose = $('.modal__close'),
    $modalActive = 'modal--active';

    $modalTrigger.on('click', function(e) {
      e.preventDefault();

      $('.modal__container').addClass($modalActive);
      $modal.attr('aria-hidden', 'false');
    });

    $modalClose.on('click', function(e){
      e.preventDefault();
    $(this).parents($modal) .removeClass($modalActive);
  });
