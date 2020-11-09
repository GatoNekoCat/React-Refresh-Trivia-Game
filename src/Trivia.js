import React from 'react';

//Trivia Game React Component
const Trivia = ()=> { 

       
    //Trivia Game Object
    const triviaGame = {
    
    score: 0,
    highscore: 0,
    answer: 0,


    //Trivia game questions, may move these soon
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