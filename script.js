    let input = document.getElementById('input')
    let button = document.querySelector('#btn');

    let wrong = document.querySelector('.wrong')
    let guesses = document.querySelector('#guesses')

    let congrulation = document.querySelector('.congrulation')
    let result = document.querySelector('.result')
    let playAgain = document.querySelector('#play-again')



    let answer = Math.floor(Math.random()*100)+1;

    let numGuess = 0;

    // on clicking button
    button.addEventListener('click',function(){
        guessNumber();
        
    })


    // guessNumber Function is Defined Here

    function guessNumber(){
        if(input.value <1 || input.value > 100 || isNaN(input.value)){
            wrong.innerHTML = "Hey ! Please Inuput Numbers Between 1 to 100 only"
        }
        else{
            wrong.innerHTML =""
           numGuess++;
           guesses.innerHTML = "No of Gusses : " + numGuess;

           if(input.value > answer){
            wrong.innerHTML = "Your Guess is Too High";
            wrong.style.color = "blue"
            input.value = ""
           }
           else if (input.value < answer){
            wrong.innerHTML = "Your Guess is Too Low";
            wrong.style.color = "blue"
            input.value = ""

           }
           else{
            wrong.innerHTML = "Your Guess Right";
            wrong.style.color = "green"
            congrulation.style.display = "block";
            result.innerHTML = "Number of Gusses Required : " + numGuess
            

            playAgain.addEventListener('click',function(){
                congrulation.style.display = "none";
                wrong.innerHTML ="";
                input.value = "";
                numGuess = 0
                guesses.innerHTML = "No of Gusses : " + numGuess
                
                
                
            })
            
            
           

           }
        }
    }


    
    