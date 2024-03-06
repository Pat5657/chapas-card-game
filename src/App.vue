<script setup lang="ts">

import {useShapas} from "@/composables/shapas";
import {onMounted} from "vue";

const { getShuffledDeck }  = useShapas()

onMounted(() => {
	console.log('shuffled', getShuffledDeck())
})

</script>

<template>
  <RouterView />
</template>
