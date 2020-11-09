import React,{useState} from 'react';

/* this is the Trivia Game component. It will contain the list
 of trivia questions and a function to load and return
a question, adding used questions to a list and removing them from
the pool of available questions.
 */
const Trivia = ()=> { 

       
    //Trivia Game Object
    const triviaGame = {

    //Trivia game questions
    triQ: [
        {
            q:"what alias does Jeffery Lebowski use?",
            pa:["Dude","Walter","Marmot","Jackie Treehorn"],
            an: "0",
            res: "I'm the Dude man, so that's like what you call me."
        },
       {
            q:"Who peed on the dudes rug?",
            pa:["Nihilists","Fascists","Woo","Jackie Treehorn"],
            an: "2",
            resp: "No like I said, WOO peed on my rug"
        },
        {
            q:"Which actor played The Stranger?",
            pa:["Harrison Ford","Sam Davis","Sam Elliot","Nicholas Cage"],
            an: "2",
            resp: "I like yer style Dude"
        },
        {
            q:"What date is written on the check the dude writes to pay for his milk?",
            pa:["Nov 5th","Sept 11th","Oct 31st","April 20th"],
            an: "1",
            resp: "This aggression will not stand"
        },
        {
            q:"What date is written on the check the dude writes to pay for his milk?",
            pa:["Nov 5th","Sept 11th","Oct 31st","April 20th"],
            an: "1",
            resp: "This aggression will not stand"
        },  
    ]      
    };
    console.log(triviaGame);
    return (
        <div className="trivia">
            <button className='start-button button-primary'>Where is my mind?</button>            
        </div>
      );
      

};

export default Trivia;