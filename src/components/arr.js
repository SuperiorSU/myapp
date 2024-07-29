let arr1 = [1,2,3,4,5,89];
let  arr2 = [11,12,13,14];

let newArr = [];
for(let i=0;i<arr1.length; i++){
    newArr.push(arr1[i])
}
for(let i=0;i<arr2.length; i++){
    newArr.push(arr2[i])
}
newArr.sort((a,b)=>{
    return(a-b)
})
for(let i=0; i<newArr.length; i++){
    console.log(newArr[i])
}