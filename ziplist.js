const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];

function ziplist(list1, list2) {
  let finalList = [];
  for (let i = 0; i < list1.length || i < list2.length; i++) {
    finalList.push(list1[i]);
    finalList.push(list2[i]);
  }
  return finalList;
}

console.log(ziplist(array1, array2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(array1, array2));