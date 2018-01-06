/*global define*/
'use strict';

// changes in master branch
// could create a conflict (as this was fixed in feature-123 branch)

define([], function () {
	return {
		// Which filter are we using?
		TodoFilter: '', // empty, active, completed

		// What is the enter key constant?
		ENTER_KEY: 13,
		ESCAPE_KEY: 27
	};
});


// this change made in master branch
// customer facing minor UI issue
// test change
// new change in feature-123 branch on 06 Jan 2018