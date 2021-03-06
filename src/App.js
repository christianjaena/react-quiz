import React from 'react';
import Questions from './components/Questions/Questions.component';
import ReactAudioPlayer from 'react-audio-player';
import { Switch, Route } from 'react-router-dom';
import Milktea from './components/Milktea/Milktea.component';
import ContextProvider from './provider/Context.provider';
const App = () => {
	return (
		<ContextProvider>
			<ReactAudioPlayer
				src='https://www.bensound.com/bensound-music/bensound-thejazzpiano.mp3'
				autoPlay
				loop
			/>
			<ReactAudioPlayer
				id='wrong-answer'
				src='https://freesound.org/people/KevinVG207/sounds/331912/download/331912__kevinvg207__wrong-buzzer.wav'
			/>
			<ReactAudioPlayer
				id='correct-answer'
				src='https://freesound.org/people/JapanYoshiTheGamer/sounds/361263/download/361263__japanyoshithegamer__8-bit-correct-answer.wav'
			/>
			<Switch>
				<Route exact path='/react-quiz' component={Questions} />
				<Route exact path='/react-quiz/YEYMILKTEAA' component={Milktea} />
			</Switch>
		</ContextProvider>
	);
};

export default App;
