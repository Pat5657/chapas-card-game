<script setup lang="ts">
import type {Card} from "@/types/cards";
import {useCards} from "@/composables/cards";

interface Props {
	card: Card
}

defineProps<Props>()

const { parseCardToString } = useCards()

</script>

<template>
	<div class="flex justify-center items-center bg-white rounded-lg w-[100px] h-[150px]">
		{{ parseCardToString(card) }}
	</div>
</template>

<style scoped>

</style>