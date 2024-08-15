const coding = ['java', 'javascript', 'php', 'python','nodejs']

coding.forEach((item) =>{
  console.log(item)
})

console.log(coding); //output ['java', 'javascript', 'php', 'python','nodejs']

const mynum = [1, 2, 3, 4, 5, 6 ,7, 9]

const newnum=mynum.filter((num) => num > 4)
console.log(newnum);

const arr = [1 ,2, 3, 4, ,5]
const newarr = arr.map((value) =>{
    console.log(value)
    return value + 1
    
})
console.log(newarr)