// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];
function superbowlWin(data) {
    let result = data.find( result => result.result === "W" )
    return !!result ? result.year : undefined
}