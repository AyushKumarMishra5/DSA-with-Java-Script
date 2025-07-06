function count(x)
{
    let result = 0;
    while(x>0)
    {
        x = Math.floor(x/10);
        result ++;
    }
    return result;
}

console.log("The number of digits in the number is: ", count(12));