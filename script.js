var signUp = (function() {
  var $form, instanceOfSingleton;

  function init (el) {
    $form = $(el);
    var svg = new Walkway({
      selector: '#sign-up__logo',
      duration: 750
    });

    $form.validate({
      errorElement: 'em',
      errorPlacement: errorPlacementHandler,
      success: successHandler,
      highlight: highlightHandler,
      unhighlight: unhighlightHandler
    });

    $form.on('submit', submitHandler);

    svg.draw();
  }

  function errorPlacementHandler (error, element) {
    error.addClass('help-block');

    element
      .parents('.form-group')
      .addClass('has-feedback');

    if ( !element.next('span')[0] ) {
      $('<span class="fa fa-remove  form-control-feedback"></span>')
        .hide()
        .insertAfter(element)
        .fadeIn(150);
    }
  }

  function successHandler (label, element) {
    var $element = $(element);

    if ( !$element.next('span')[0] ) {
      $('<span class="fa fa-check form-control-feedback"></span>')
        .hide()
        .insertAfter($element)
        .fadeIn(150);
    }
  }

  function highlightHandler (element, errorClass, validClass) {
    var $element = $(element);

    $element
      .parents('.form-group')
      .addClass('has-error animated shake')
      .removeClass('has-success');

    $element
      .next('span')
      .addClass('fa-remove')
      .removeClass('fa-check');
  }

  function unhighlightHandler (element, errorClass, validClass) {
    var $element = $(element);

    $element
      .parents('.form-group')
      .addClass('has-success')
      .removeClass('has-error animated shake');

    $element
      .next('span')
      .addClass('fa-check')
      .removeClass('fa-remove');
  }

  function submitHandler () {
    
    if ( $form.valid() ) {
      $form
        .find('button')
          .text('Creating Account...')
          .attr('disable', true);
    }
  }

  return {
    init: function (el) {
      if (instanceOfSingleton === undefined) { instanceOfSingleton = init(el); }
      return instanceOfSingleton;
    }
  }
})();

$(document).ready(signUp.init('[data-behavior~=sign-up]'));
