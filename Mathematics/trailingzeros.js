function zero(n)
{
    let res = 0;
    for(let i = 5; i<=n ; i = i* 5)
    {
        res = res + Math.floor(n/i);
    }
    return res;
}

console.log("Trailing zeros from the factorial of the number: ", zero(100))