import type {Card} from "@/types/cards";
import {CardSuit, CardValue} from "@/types/cards";

export function useCards() {
	function parseCardToString(card: Card) {
		const color = cardSuitToString(card.suit)
		const value = cardValueToString(card.value)
console.log(card.value, value)
		return color + value
	}

	function cardSuitToString(cardSuit: CardSuit) {
		return cardSuit[0]
	}

	function cardValueToString(cardValue: CardValue) {
		switch (cardValue) {
			case CardValue.TWO:
				return '2'
			case CardValue.THREE:
				return '3'
			case CardValue.FOUR:
				return '4'
			case CardValue.FIVE:
				return '5'
			case CardValue.SIX:
				return '6'
			case CardValue.SEVEN:
				return '7'
			case CardValue.EIGHT:
				return '8'
			case CardValue.NINE:
				return '9'
			case CardValue.TEN:
				return '10'
			case CardValue.JACK:
				return 'J'
			case CardValue.QUEEN:
				return 'Q'
			case CardValue.KING:
				return 'K'
			case CardValue.ACE:
				return 'A'
			case CardValue.JOKER:
				return 'X'
		}
	}

	return {
		parseCardToString
	}
}