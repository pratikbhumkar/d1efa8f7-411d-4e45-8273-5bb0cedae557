import findIncreasingSubArray from "./IncreasingSubarrayFinder";
export default function IncreasingSubArrayRunner(inputString){
    var increasingSubArray = findIncreasingSubArray(inputString.split(" "))
    return increasingSubArray.join(" ");
}