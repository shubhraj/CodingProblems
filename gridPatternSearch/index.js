var grid = [
  [7,2,8,3,4,5,5,8,6,4],
  [6,7,3,1,1,5,8,6,1,9],
  [8,9,8,8,2,4,,2,6,4,3],
  [3,8,3,0,5,8,9,3,2,4],
  [2,2,2,9,5,0,5,8,1,3],
  [5,6,3,3,8,4,5,3,7,4],
  [6,4,7,3,5,3,0,2,9,3],
  [7,0,5,3,1,0,6,6,0,1],
  [0,8,3,4,2,8,2,9,5,6],
  [4,6,0,7,9,2,4,1,3,7]
]

var pattern = [
  [3,4],
  [9,5,0,5],
  [3,8,4,5],
  [3,5,3,0]
]

var gridStr;
var patternStr;
var counter = 0;
var result = gridSearch(grid, pattern);
console.log("result = " + result );

function gridSearch(grid, pattern){

   gridStr = flattenGrid(grid);
   patternStr = flattenGrid(pattern);

  for(var i = 0; i < patternStr.length ; i++ ){

    for (var j = 0; j < gridStr.length; j++) {
       if(gridStr[j].includes(patternStr[i])) {
         ++counter;
         break;
       }
    }

  }

if(counter === pattern.length) return "YES";
return "NO";

}

function flattenGrid(grid) {
  return grid.map(function(r)  {
    return r.join(',');
  });
}
