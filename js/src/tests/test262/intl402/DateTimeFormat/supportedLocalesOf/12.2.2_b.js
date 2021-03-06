// |reftest| skip-if(!this.hasOwnProperty('Intl')) -- needs Intl
// Copyright 2013 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es5id: 12.2.2_b
description: >
    Tests that Intl.DateTimeFormat.supportedLocalesOf  doesn't access
    arguments that it's not given.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

taintDataProperty(Object.prototype, "1");
new Intl.DateTimeFormat("und");

reportCompare(0, 0);
