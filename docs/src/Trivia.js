import React,{useState, useEffect} from 'react';
import Timer from './Timer';


/* this is the Trivia Game component. It will contain the list
 of trivia questions and a function to load and return
a question, adding used questions to a list and removing them from
the pool of available questions.
 */
const Trivia = ()=> { 

    const[curQ, setCurQ] = useState(0)
    const[showScore, setShowScore] = useState(false);
	const[score, setScore] = useState(0);
	const[gameActive,setGameActive] = useState(false);
       
    //Trivia game questions
    const questions = [
        {
            questionText: 'what alias does Jeffery Lebowski use?',
			answerOptions: [
				{ answerText: 'Dude', isCorrect: true },
				{ answerText: 'Walter', isCorrect: false },
				{ answerText: 'Marmot', isCorrect: false },
				{ answerText: 'Jackie Treehorn', isCorrect: false },
			],
        },
        {
            questionText: 'Who peed on the dudes rug?',
			answerOptions: [
				{ answerText: 'Nihilists', isCorrect: false },
				{ answerText: 'The Dude', isCorrect: false },
				{ answerText: 'The Marmot', isCorrect: false },
				{ answerText: 'Woo', isCorrect: true },
			],
        },
        {
            questionText: 'Which actor played The Stranger?',
			answerOptions: [
				{ answerText: 'Harrison Ford', isCorrect: true },
				{ answerText: 'Jeff Lebowski', isCorrect: false },
				{ answerText: 'Chuck Noris', isCorrect: false },
				{ answerText: 'John Turturro', isCorrect: false },
			],
        },
        {
            questionText: 'What is the date written on the check the dude post dates to pay for his creamer?',
			answerOptions: [
				{ answerText: 'Nov 5th', isCorrect: false },
				{ answerText: 'Sept 11th', isCorrect: true },
				{ answerText: 'Oct 31st', isCorrect: false },
				{ answerText: 'April 20th', isCorrect: false },
			],
        },
        {
            questionText: "What is the clean version of the infamous 'Do you see what happens larry?' scene?",
			answerOptions: [
				{ answerText: 'Find and store an apple', isCorrect: false },
				{ answerText: 'Spend a summer in Atlanta', isCorrect: false },
				{ answerText: 'Fill a stein and then ask', isCorrect: false },
				{ answerText: 'Find a stranger in the Alps', isCorrect: true },
			],
        },
	];


    const handleAnswerButtonClick = (isCorrect) => {

        if(isCorrect === true){
            setScore(score + 1);
            }
        const nextQuestion = curQ+1;
        if(nextQuestion < questions.length){
            setCurQ(nextQuestion);	
        } else {
            setShowScore(true);
            }
	};
	const StartSection = <div className='score-section'>
							<h1>Ready for a little trivia?</h1>
							<br/>
							<button onClick={setGameActive(true)}>Start</button>
						</div>;
	const ShowScoreSection = <div className='score-section'>You scored {score} out of {questions.length}</div>
	const GameSection =
						<>
							<div className='question-section'>
								<div className='question-count'>
									<span>Question {curQ + 1}/{questions.length} </span>
								</div>
								<div className='question-text'><h1>{questions[curQ].questionText}</h1></div>
							</div>
							<div className='answer-section'>
								{questions[curQ].answerOptions.map((answerOption) =>
									<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)
								}


							</div>)
						</>
	//This is fucked. Should probably start again from scratch. 

	useEffect(()=>{
		if (gameActive){
			return(
				<StartSection />
			)
		} else if (showScore){
			return (
				<ShowScoreSection/>
			)
		} else {
			return(
				<GameSection/>
			)
		}
	},[gameActive, showScore]);
};
    
    


export default Trivia;