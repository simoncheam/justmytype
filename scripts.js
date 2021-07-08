

// use .attr function to hide uppercase keyboard
$('#keyboard-upper-container').hide();

/// Insert array info:

//test sentences
// const sentences = [
    
//     'the quick',  //brown fox
//     'jumped over' //the lazy dog
    
// ];

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];


/// Create indexing logic

let currentSentenceIndex = 0;  //current sentence we are on
let currentLetterIndex = 0; //
let sentencesArrayLength = sentences.length;
let numberOfMistakes = 0;
let numberOfWords = 54; // <<<<<<<<<<<<<<<<<<<< ! ! ! This number is hard coded
let Active = false;
var theStartTime;

let currentLetter = sentences[currentSentenceIndex][currentLetterIndex];
let currentSentence = sentences[currentSentenceIndex];

$('#target-letter').text(currentLetter); 

$('#sentence').text(currentSentence);

$(document.body).keypress(function(event) {
    
    let currentLetter = sentences[currentSentenceIndex][currentLetterIndex]; 

    let currentSentence = sentences[currentSentenceIndex];
    $('#sentence').text(currentSentence);

    if(Active === false){
        let startTime = Date.now();
        
        console.log('startTime: ' +startTime);
        Active = true; 

        theStartTime = startTime;
    }


    /// CONSOLE LOGS
   // console.log('currentSentence: '+ currentSentence);
   // console.log('currentSentenceIndex: '+ currentSentenceIndex);
    

   // console.log("current letter: " + currentLetter); // actually previous values after key press
  //  console.log("current letterIndex: " + currentLetterIndex); // actually previous values after key press
   // console.log("current Sentence.Length: " + currentSentence.length);
    
    //   LETTER INDEX COUNTER 
    if(currentLetterIndex +1 >= sentences[currentSentenceIndex].length){  // this is the current sent row length
        
       
        /// Insert Gameover Condition check ----------------------
        // Test from Andrew: 
        
        console.log(`%ccurrentSentenceIndex:\t${currentSentenceIndex}\ncurrentSentenceIndex+1:\t${currentSentenceIndex+1}\nsentences.length:\t${sentences.length}\ncurrentLetterIndex:\t${currentLetterIndex}\ncurrentSentence.length:\t${currentSentence.length}`,  'background-color: green; color: white; font-size: 2.5rem');
        
       console.log('startTime: ' +theStartTime);
        
        
        if((currentSentenceIndex+1 >= sentences.length ) && (currentLetterIndex +1 >= currentSentence.length)){   
        
        
        console.log("GAME OVER!");

        // EndGame time calcs
        let endTime = Date.now();
        console.log("Start Time (miliseconds): " +theStartTime);
        console.log("End Time (miliseconds): " +endTime);

        let miliSeconds = endTime - theStartTime;

        console.log("Your Time (miliseconds): " +miliSeconds);

        let seconds = miliSeconds/1000;
        let minutes = seconds/60;
        let WPM = numberOfWords/minutes;

        console.log("Your Score (Words Per Minute): " +WPM);

        alert ("Took you long enough! Click OK to see your score...");
        alert ("words per min: " +WPM);
        alert ("number of mistakes: " +numberOfMistakes);

        alert ("GAME OVER!");
            if(confirm("do you want to reload?")){
                window.location.reload();
            }

        } else {
            currentSentenceIndex++;
        }

        /// END of Gameover Condition check ----------------------

        $('#feedback').empty();
      //  console.log("Feedback - REMOVED!");

        $('#sentence').empty();
      //  console.log("Sentence - REMOVED!");

        currentLetterIndex =0;
        $('#yellow-block').css('left','0px');  /// reset highlight position on new sentence

        // NEXT sentence added:
        $('#sentence').text(sentences[currentSentenceIndex]);

    } else {
       currentLetterIndex +=1;  //increment letter +1
        
    }
    
   




    const keyID = event.originalEvent.which;
    const keyPressed = event.originalEvent.key;
   // console.log('keyID =  ' +keyID);
    console.log('key pressed =  ' +keyPressed);


    //////////////////               MATCHING LOGIC            ////////////
    
    if(keyPressed == currentLetter){
        
        // append green check to #feedback
    
            $('#feedback').append('<p class ="d-flex">✅</p>');
            //currentLetterIndex +=1; creates problem when moving to next sentence
        
        // Add target letter here!
       $('#target-letter').text(sentences[currentSentenceIndex][currentLetterIndex]);  

        $('#yellow-block').css('left','+=17.5px');  /// need to reset on new sentence

        } else if( currentLetter !== keyPressed) {
        
            // append red X to #feedback
            $('#feedback').append('<p class ="d-flex">❌</p>');

            numberOfMistakes +=1;
            console.log('numberOfMistakes: '+ numberOfMistakes);

        console.log("previous letterIndex: " + currentLetterIndex);// current letter index check
        currentLetterIndex -=1;  // Had to add -=1 index reduction to stop counter from moving forward.

        };


});


//sensitivty and casing

/// includes nested functions (majority of lab)
$(document.body).keypress(function(event){

 //   console.log(event.originalEvent.which);  //         prints Ascii #
    let currentLetter = sentences[currentSentenceIndex][currentLetterIndex];

    const keyID = event.originalEvent.which;
    // const keyPressed = event.originalEvent.key;
    // console.log('keyID =  ' +keyID);
    // console.log('key pressed =  ' +keyPressed);
    

     $("#"+keyID).css("background-color","yellow");
     setTimeout(function(){
      $("#"+keyID).css("background-color","#f5f5f5");
    }, 150);           
    
});


// good for meta keys (alt, etc )
$(document.body).keydown(function(event){

    // Show KB on shiftdown
    if (event.originalEvent.which === 16) {
        console.log('Shift Down!');
        $('#keyboard-upper-container').show();
    }
});

$(document.body).keyup(function(event){

    // hide KB on shiftup
    if (event.originalEvent.which === 16) {
      //  console.log('Shift up!');
        $('#keyboard-upper-container').hide()
    }
    });