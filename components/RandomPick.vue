<template>
    <div>
        <button @click="randomPickGame" class='todaySelect'>
            오늘은 여기다 !! (click)
        </button>
        <h1 class='storeName'>{{ pickedStore ? pickedStore.name : '어디 갈까?' }}</h1>
    </div>
</template>

<script setup lang="ts">

interface Store {
    name: string;
    position: number;
    avg: number;
}

const pickedStore = ref<Store | null>(null);
const props = defineProps({
    stores: Array as () => Store[]
})

const randomPickGame = () => {
    const randomIndex = Math.floor(Math.random() * (props.stores?.length ?? 0));
    const randomElement = props.stores?.[randomIndex] ?? null;
    pickedStore.value = randomElement;
};
</script>

<style scoped></style>