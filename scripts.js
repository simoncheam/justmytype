

// use .attr function to hide uppercase keyboard
$('#keyboard-upper-container').hide();


//when shift pressed:
//$('#keyboard-upper-container').show();


// ----------Need:

// 1. sentence  = which string do we need
// 2. phrase ==  which letter in the word
// sentenceArrayLength = sentences.length

// -------------logic: 
// track where we are (sentence index, current letter index)


/// Insert array info

const sentences = [
    
    'the quick.',  //brown fox
    'jumped over' //the lazy dog
    
];
/// Create indexing logic

let currentSentenceIndex = 0;  //current sentence we are on
let currentLetterIndex = 0; //
let sentencesArrayLength = sentences.length;


///                                    {{{{{            TESTING             }}}}} 

let currentLetter = sentences[currentSentenceIndex][currentLetterIndex];
let currentSentence = sentences[currentSentenceIndex];

$('#target-letter').text(currentLetter); /// change text of id=target-letter (needs to move - target print happening before logic check)h

$('#sentence').text(currentSentence);

$(document.body).keypress(function(event) {
    
    let currentLetter = sentences[currentSentenceIndex][currentLetterIndex]; // Q: why do we put this inside the keypress function?

   // $('#target-letter').text(currentLetter);

    let currentSentence = sentences[currentSentenceIndex];
    $('#sentence').text(currentSentence);



    /// CONSOLE LOGS
    console.log('currentSentence: '+ currentSentence);
   // console.log('currentSentenceIndex: '+ currentSentenceIndex);
    

    console.log("current letter: " + currentLetter);
    console.log("current letterIndex: " + currentLetterIndex);
   // console.log("current Sentence.Length: " + currentSentence.length);
    
    // !!!!  LETTER INDEX COUNTER !!!!!!! (^^^^^^^^ This works! ^^^^^^^^)
    if(currentLetterIndex +1 >= sentences[currentSentenceIndex].length){  // this is the current sent row length
        
        console.log('\n\n');
        currentSentenceIndex++;
        $('#feedback').empty();
      //  console.log("Feedback - REMOVED!");

        $('#sentence').empty();
        
      //  console.log("Sentence - REMOVED!");

        currentLetterIndex =0;

        //Announces NEXT sentence:
        // console.log('the NEXT currentSentence is: '+ currentSentence);

        console.log('the NEXT currentSentence is: '+ sentences[currentSentenceIndex]);

        $('#sentence').text(sentences[currentSentenceIndex]);

        
    } else {
        currentLetterIndex +=1;

        //$('#target-letter').text(currentLetter);
        
        
    }
    
    /// !!!!!!!!!!!!!!!!!  NEXT SENTENCE Counter -------------------------------------
    console.log('currentSentence.length: '+currentSentence.length);
    
        if (currentLetterIndex +1 === currentSentence.length){
            //$('#sentence').remove(currentSentence);
            // $('#sentence').append(currentSentence); does not work in sentence counter
            console.log('NEXT SENTENCE!');


            /// !!! Clear #feedback here
            //$('#feedback').empty(); 

    
           
        }
    /// !!!!!!!!!!!!!!!!!  NEXT SENTENCE Counter -------------------------------------

      



//////////////////               MATCHING LOGIC            ////////////


    const keyID = event.originalEvent.which;
    const keyPressed = event.originalEvent.key;
   // console.log('keyID =  ' +keyID);
    console.log('key pressed =  ' +keyPressed);

//////////////////               MATCHING LOGIC            ////////////

        if(keyPressed == currentLetter){

        //console.log('*** GREEN CHECK!!!! ***')
        //currentLetter++;

        // append green check to #feedback

            $('#feedback').append('<p class ="d-flex">✅</p>');

            // $('#feedback').append('<div><i class="bi bi-check"></i></div>');


            


        // Add target here!
       $('#target-letter').text(sentences[currentSentenceIndex][currentLetterIndex]);  // Q: I'm not sure why I had to do this but it works?

            /// !!! ADD highlighting for same letter in the Sentence div !!!


        } else if( currentLetter !== keyPressed) {
        //console.log('XXX RED X!!!! XXX' )

            // append red X to #feedback
            $('#feedback').append('<p class ="d-flex">❌</p>');

            // Previous Letter Logs?


        console.log('previous letter = ' +currentLetter )
        console.log('key pressed = ' +keyPressed )
        console.log("previous letterIndex: " + currentLetterIndex);// current letter index check
        currentLetterIndex -=1;  // Had to add -=1 index reduction to stop counter from moving forward.


        };






  
    

    
   //  $('#target-letter').append(currentLetter); /// Append letter to id=target-letter

   //( INDEX IS OFF BY +1)
   //$('#target-letter').text(currentLetter); /// change text of id=target-letter
    
   
            
    

//     // GAME OVER Condition
    
// };

console.log("GAME OVER TEST: currentSentenceIndex " +currentSentenceIndex);
console.log("GAME OVER TEST: sentences.length " +sentences.length);

if(currentSentenceIndex+1 === sentences.length ){  // should it be >=?

    console.log("GAME OVER!");
    alert ("GAME OVER!");
}
///                                    {{{{{            TESTING             }}}}} 

// Need to create If/Else to append sentence to id=sentence div


///                                    {{{{{            TESTING             }}}}} 






///                                ADD STOP CONDITION? END OF GAME

});










//ideas:

// when keypress >>> letterindex++
// jump to next sentence when current letter index is >= sentence length

// stop condition : use if statement then confirm alert



// *Hint: the letters should be matched with the corresponding ascii code. The id value of the key in the html corresponds to the ASCII character code that you can access in the keyboard listener. For example, ascii value 65 is A, and 97 is a. Search for ASCII character chart to see a complete list of codes. 









//sensitivty and casing

/// includes nested functions (majority of lab)
$(document.body).keypress(function(event){

 //   console.log('keydown!  ');
 //   console.log(event.originalEvent.which);  //         prints Ascii #
    let currentLetter = sentences[currentSentenceIndex][currentLetterIndex];

    const keyID = event.originalEvent.which;
    // const keyPressed = event.originalEvent.key;
    // console.log('keyID =  ' +keyID);
    // console.log('key pressed =  ' +keyPressed);
    


    //////////////////               MATCHING LOGIC            ////////////

            // if(keyPressed == currentLetter-1){

            // console.log('*** GREEN CHECK!!!! ***')
            // //currentLetter++;


            // } else if( currentLetter !== keyPressed) {
            // console.log('XXX RED X!!!! XXX' )
            // console.log('current letter = ' +currentLetter )
            // console.log('key pressed = ' +keyPressed )
            // };

    //////////////////               MATCHING LOGIC            ////////////

    // !!!!!{{{{{{{{{{{{{{{ INSERT KEY ID jQuery ANIMATION }}}}}}}}}}}}}}}
        //use setTimout(function(){

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