function findFloor(arr, x, low = 0, high = arr.length-1) {
   if (low > high) return - 1;

   if (x > arr[high]) return arr[high];

   let mid = Math.floor((low + high) / 2)

   if (arr[mid] === x) return arr[mid];

   if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
      return arr[mid - 1];
   }
   
   if (num < arr[mid]) {
      return findFloor(arr, x, low, mid - 1);
   }

   return findFloor(arr, x, mid + 1, high)
}

module.exports = findFloor