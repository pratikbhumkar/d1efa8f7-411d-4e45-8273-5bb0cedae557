import findIncreasingSubArray from "./IncreasingSubarrayFinder.js";
export default function IncreasingSubArrayRunner(inputString){
    var inputArray = inputString.split(" ");
    var increasingSubArray = findIncreasingSubArray(inputArray)
    return increasingSubArray.join(" ");
}