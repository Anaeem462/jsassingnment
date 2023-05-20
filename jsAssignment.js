function multiplicationFunc(nums = 0) {
    const num = parseInt(nums);
    for (i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}
multiplicationFunc(5);
