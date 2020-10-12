export const formatMoney = (num) => {
   const formatedResult = num.toLocaleString('en-US');
   return formatedResult;
};

export const toShuffle = (array) => {
   const arr = array;

   let currentIndex = arr.length;
   let temporaryValue;
   let randomIndex;

   while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
   }

   return arr;
};
