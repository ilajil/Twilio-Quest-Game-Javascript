function fizzbuzzswitch(){
    for(var i=0; i<=100; i++){
        switch(true){
            case i%3==0 && i%5==0 :
                console.log('FizzBuzz');
                break;
            
            case i%3==0:
                console.log('Fizz');
                break;
            
            case i % 5 == 0:
                console.log('Buzz');
                break;

            default:
                console.log(i);
                break;
        }

    }
    
}
fizzbuzzswitch();