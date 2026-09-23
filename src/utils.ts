export function strToArr(str: string) {
   return str.split("\n");
}

export function concatArrayToChainString(arr: string[]) {
   return arr.reduce((acc, item, index) => {
      if (index === 0) return acc + item;

      return acc + item.slice(2);
   });
}
