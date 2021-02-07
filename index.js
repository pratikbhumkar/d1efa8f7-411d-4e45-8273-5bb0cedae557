import findIncreasingSubArray from "./IncreasingSubarrayFinder";
export default function IncreasingSubArrayRunner(inputString){
    var inputArray = inputString.split(" ");
    var increasingSubArray = findIncreasingSubArray(inputArray)
    return increasingSubArray.join(" ");
}