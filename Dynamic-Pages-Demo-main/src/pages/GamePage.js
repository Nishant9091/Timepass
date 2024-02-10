import { useState, useEffect } from "react"
import axios from "axios"

// router
import { useParams } from "react-router-dom";

export const GamePage = () => {

	const { gameId } = useParams();


	const [game, setGame] = useState([]);

	useEffect(() => {
		const handleGameList = () => {
			const options = {
				method: 'GET',
				url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
				params: { id: gameId },
				headers: {
					'X-RapidAPI-Key': 'f265139743mshf4b6e7bd02f7ce7p1455a3jsnf98556652557',
					'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
				}
			};
			axios.request(options).then(function (response) {
				setGame(response.data);
			}).catch(function (error) {
				console.error(error);
			})
		}
		handleGameList();

	}, [gameId])
	console.log(gameId);
	return (
		<div className="game-page">
			<img src={game.thumbnail} alt="" />
			<h1>{game.title}</h1>
			<p>{game.description}</p>
		</div>
	)
}
