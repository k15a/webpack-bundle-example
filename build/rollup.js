(function () {
'use strict';

function func$1() {
	return func + 'file2'
}

function func() {
	return func$1 + 'file1'
}

const index = 'hello';

console.log(index);
console.log(func);
console.log(func$1);

}());
