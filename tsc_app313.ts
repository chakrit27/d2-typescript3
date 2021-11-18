let total: number = 1;
for (let i: number = 1; i <= 2; i = i+ 1) {
    console.log(i);
    total = total + i*10;
}
console.log('Total = ', total);
for(;;){
    console.log(total++);
}