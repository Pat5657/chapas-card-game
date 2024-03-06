import {cardDeck} from "@/util/cardDeck";

export function useShapas() {
	function getShuffledDeck() {
		let deck = cardDeck
		let currentIndex = deck.length, randomIndex

		while (currentIndex > 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[deck[currentIndex], deck[randomIndex]] = [
				deck[randomIndex], deck[currentIndex]];
		}

		return deck
	}

	return {
		getShuffledDeck
	}
}