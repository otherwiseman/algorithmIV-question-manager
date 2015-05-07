  /**
   * -----------------------------------------------------
   * Public Method (prettify)
   * -----------------------------------------------------
   * @desc The prettifier for this app.
   * @param {string} solution - The problem's solution to be formatted.
   * @return {{
   *   result   : string,
   *   lineCount: number
   * }}
   */
  var prettify = (function() {

    var prettify = function(solution) {

      prettify.debug.group('init', 'coll');
      prettify.debug.group('init', 'coll', 'Open to see original string');
      prettify.debug.start('init', solution);
      prettify.debug.group('init', 'end');
      prettify.debug.args('init', solution, 'string');

      /** @type {{ result: string, lineCount: number }} */
      var result;

      // Format the solution
      result = applyFormatting( prepareLines(solution) );

      prettify.debug.group('init', 'end');

      return result;
    };

/* -----------------------------------------------------------------------------
 * The Prettifier Module Variables (pre-compiled-prettifier/prettify-vars.js)
 * -------------------------------------------------------------------------- */
// insert-prettify-vars

/* -----------------------------------------------------------------------------
 * The Prettifier Module Methods (pre-compiled-prettifier/prettify-methods.js)
 * -------------------------------------------------------------------------- */
// insert-prettify-methods

/* -----------------------------------------------------------------------------
 * The Highlight Syntax Method (pre-compiled-prettifier/highlight-syntax.js)
 * -------------------------------------------------------------------------- */
// insert-highlight-syntax

    return prettify;

  })();
