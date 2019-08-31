'use strict';

const compare = new Intl.Collator().compare;
const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
const wordSort = word => word.split('').sort((a, b) => compare(a, b)).join('')
const wordsArraySort = array => array.sort((a, b) => compare(a, b))

const sort = text => wordsArraySort(text.split(' ').map(elem => capitalize(wordSort(elem)))).join(' ')
