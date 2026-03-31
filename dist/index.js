/** @license Apache-2.0 */

'use strict';

/**
* Negative binomial distribution quantile function.
*
* @module @stdlib/stats-base-dists-negative-binomial-quantile
*
* @example
* var quantile = require( '@stdlib/stats-base-dists-negative-binomial-quantile' );
*
* var y = quantile( 0.9, 20.0, 0.2 );
* // returns 106
*
* y = quantile( 0.9, 20.0, 0.8 );
* // returns 8
*
* var myquantile = quantile.factory( 10.0, 0.5 );
* y = myquantile( 0.1 );
* // returns 5
*
* y = myquantile( 0.9 );
* // returns 16
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
