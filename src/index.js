//rest and spread in es6

function addnumbers(...restNumbers) {
  console.log(restNumbers);
  return null;
}

addnumbers(2, 4, 5, 6, 7);

function lognames(name1, name2, name3) {
  console.log(name1, name2, name3);
}

var names = ["ab", "jahdj", "jsahdj"];

lognames(...names);
