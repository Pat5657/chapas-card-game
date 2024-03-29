export type Card = {
	suit: CardSuit|CardSuitColour
	value: CardValue
}

export enum CardSuit {
	HEARTS = 'Hearts',
	DIAMONDS = 'Diamonds',
	CLUBS = 'Clubs',
	SPADES = 'Spades'
}

export enum CardSuitColour {
	BLACK = 'BLACK',
	RED = 'RED'
}

export enum CardValue {
	TWO = 2,
	THREE = 3,
	FOUR = 4,
	FIVE = 5,
	SIX = 6,
	SEVEN = 7,
	EIGHT = 8,
	NINE = 9,
	TEN = 10,
	JACK = 11,
	QUEEN = 12,
	KING = 13,
	ACE = 14,
	JOKER = 15
}