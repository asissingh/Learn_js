let a = [10,12,44,52,41,52,11];
for(let i = 0;i<a.length-1;i++){
if(a[i]<a[i+1]){
    console.log(a[i+1]+" UP");
}
else{
console.log(a[i+1]+" Down");
}
}