// Task-7
function sortNums(nums, direction) {
    if (direction === 'ascending') return nums.sort((a, b) => a - b);
    if (direction === 'descending') return nums.sort((a, b) => b - a);
}

let numsDes = sortNums([11, 22, 3], 'descending');
console.log(numsDes);
let numsAsc = sortNums([11, 22, 3], 'ascending');
console.log(numsAsc);

// Task-8
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let map = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(course => course.monthDuration > 5)
    .map((value, index) => {
        return {
            id: index + 1,
            title: value.title,
            monthDuration: value.monthDuration
        }
    });
console.log(map);
