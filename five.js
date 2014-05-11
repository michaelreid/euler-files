var a = [[1,2,3,2,2,3],[3,4,2,1,7]];

var checkArray = function(a) {
	for(var i = 0; i < a.length; i++){
		for(var j = 0; j < a[i].length; j++){
			if( a[i][j]%2 !== 0 )
			   (a[i]).splice(j,1);
		}
	}
	return a;
}

console.log(checkArray(a));
