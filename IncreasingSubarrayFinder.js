export default function findIncreasingSubArray(inputArray) {
    var longestIncreasingSubArray = [];
    var longestIncreasingSubArrayCount = 0;
    var currentElement = 0;
    var currentArray = [];
    var currentArrayCount = 0;
    for (let index = 0; index < inputArray.length; index++) {
        if (Number(inputArray[index]) > Number(currentElement)) {
            currentElement = inputArray[index];
            currentArray.push(inputArray[index])
            currentArrayCount++;
            if (currentArrayCount>longestIncreasingSubArrayCount && currentArrayCount > 1) {
                longestIncreasingSubArrayCount = currentArrayCount
                longestIncreasingSubArray = currentArray
            }
        } else {
            currentArrayCount = 0;
            currentArray = [];
            currentElement = 0;
            index--;
        }
    }
    return longestIncreasingSubArray;
}
