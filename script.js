// The game last for long 5 game, I go for while loop,
// Lets take a = 5, while a!=0: run the game and decreament the 'a' after each iteration. Until a==0 condition not met.
let a = 0
let ca_score = 0
let ha_score = 0
while (a != 5) {
    
    console.log(   `Round ${a+1}` )
    // 1. Create two variable one store the computer answer other store the human answer. 
    // 'ha' store the human answer, taking input with the help of prompt.
    let h = prompt('Choose one from the Rock, Scissor and Paper.')
    let extract_first_character = h.slice(0,1).toUpperCase()
    let rest_string = h.slice(1,).toLowerCase()
    let ha = extract_first_character + rest_string
    if (ha != "Rock" || ha != "Scissor" || ha != "Paper"){
        a = 5
    }else{
        console.log("You Chose:",ha)
        // 2. How computer select randomly? for that we need to use the math.random function and use those in selecting the rock, paper and scissor.
        let rand = Math.random()*100

        // Lets call it 'ca' store the computer answer 
        // 3. Create a variable to select base on this, lets call it n, if n <= 33.3 select rock, else if n <= 66.6 select paper, else select scissor.
        let ca;
        if (rand <= 33.3){
            ca = "Rock";
        } else if (33.3 <rand <= 66.6){
            ca = "Scissor";
        } else {
            ca = "Paper";
        }
        console.log("Computer Chose:",ca)
        // 4. Next we need to compare answer,
        // 5. Next we need to store the result for every win. we initiate a variable to 'ca_score' and increament this to each win for 'ca'.
        
        //      if 'ca' chose rock and 'ha' chose scissor,
        if (ca == "Rock" && ha == "Scissor"){
        //          print(better luck next time), increament score for 'ca'
            console.log("You loose, better luck to next round!")
            ca_score+=1
        //          else if 'ca' chose scissor and 'ha' chose paper
        } else if (ca == "Scissor" && ha == "Paper"){
        //          print(better luck next time), increament score for 'ca'
            console.log("You loose, better luck to next round!")
            ca_score+=1
        //          else if 'ca' choose paper and 'ha' chose rock
        } else if (ca == "Paper" && ha == "Rock"){
        //          print(better luck next time), increament score for 'ca'
            console.log("You loose, better luck to next round!")
            ca_score+=1
            //          else if 'ca' and 'ha' chose same
        } else if ((ca == "Paper" && ha == "Paper") || (ca == "Rock" && ha == "Rock") || (ca == "Scissor" && ha == "Scissor")){
            //          print(Draw), increament nothing
                console.log("Its a Draw!")
        // 6. In else statement 'ha' won all the game, 
        } else{
        //      print(nice, you won!) and we increament the score for 'ha' by the help of variable 'ha_score'.
            console.log("You win!")
            ha_score+=1
        }
        console.log(   `Scores Update` )
        console.log("Computer Score:",ca_score)
        console.log("Your Score:",ha_score)
        a+=1
    }
}

// 9. We compare two variable 'ca_score' and 'ha_score' which ever is greater won the match.
if (ca_score > ha_score) {
    console.log("You loose the Match!")
} else if (ca_score == 0 && ha_score == 0){
    console.log("Enter a Valid Input Please!")
    console.log("Reload page to start the game again.")
} else if (ca_score == ha_score) {
    console.log("Its a Draw, You played well!")
} else {
    console.log("You Won the Match, Hurray!")
}