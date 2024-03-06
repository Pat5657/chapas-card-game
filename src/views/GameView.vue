<script setup lang="ts">

import PlayCard from "@/components/PlayCard.vue";
import {CardSuit, CardValue} from "@/types/cards";
</script>

<template>
	<main class="bg-slate-800 h-screen w-screen">
		<PlayCard :card="{ suit: CardSuit.SPADES, value: CardValue.ACE }" />
	</main>
</template>

<style scoped>

</style>