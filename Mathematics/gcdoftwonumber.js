function gcd(a, b)
{
    let result = Math.min(a, b);
    while(result > 0)
    {
        if(a%result === 0 && b%result === 0)
        {
            return result;
        }
        result--;
    }
    return result;
}
console.log("Finding GCD of 2 numbers: ", gcd(5, 15));