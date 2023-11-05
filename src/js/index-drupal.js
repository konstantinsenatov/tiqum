/**
 * @file
 */

(function ($, Drupal) {

  /**
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.tiqum = {
    attach(context) {

      $('#views-count-result-target').once('views-count-result-target').each(function () {
        if ($('#views-count-result-source').length) {
          $(this).text('(+' + $('#views-count-result-source').text() + ')')
        }
      });
    },
  };

})(jQuery, Drupal);
