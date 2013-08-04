/*
 * Copyright (c) 2013 Daniël van de Giessen
 * http://www.dvdgiessen.nl/
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function($) {
	$.fn.filterable = function() {
		this.each(function() {
			// Save the table as variable so we can refer to it later
			var table = this;
			
			// Insert the searchbox right before the table
			$(table).before(
				// Create a new form
				$('<form class="jquery-filterable-filter" />')
				// Add a input element to the form
				.prepend($('<input type="text" />').keyup(function() {
					// Split search terms
					var terms = this.value.toLowerCase().split(' ');
					
					// Limit search to the table's body
					var tbody = $(table).children('tbody');
					if(tbody.length == 0) tbody = $(table);
					
					// For each row
					tbody.find('tr').each(function() {
						// Save the current instance
						var tr = $(this);
						
						// Hide it
						tr.hide();
						
						// Loop through every term
						for(var i = 0; i < terms.length; i++) {
							// If the term is found within the row...
							if(tr.html().replace(/<[^>]+>/g, '').toLowerCase().indexOf(terms[i]) >= 0) {
								// ...unhide the row
								tr.show();
								
								// No need to run through the next terms
								continue;
							}
						}
					});
				})
			));
		});
	};
}(jQuery));
