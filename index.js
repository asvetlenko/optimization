'use strict';

const rightChoose = (...args) => {
  const alternativeList = [
    [k, w],
    [m, v],
    [n, t],
    [p, s],
    [q, r]
  ];

  for(let index in alternativeList) {
    let alternative = alternativeList[index];

    if(!args[index]){
      alternative[1]();
      return false;
    }

    alternative[0]();
  }
  return true;
};
