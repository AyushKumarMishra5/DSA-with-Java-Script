function factorial(n)
{
    let fact;
    if(n==0 || n==1)
    {
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

console.log("Factorial of the number is: ", factorial(5));