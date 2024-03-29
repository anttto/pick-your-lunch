<template>
    <div class="flex flex-col justify-center items-center w-full min-h-[40vh] text-center gap-y-10">
        <h1 class='storeName'>{{ pickedStore ? pickedStore.name : '어디 갈까?' }}</h1>
        <button @click="randomPickGame" class='border-[1px] w-[90vw] py-2'>
            오늘은 여기다 !! (click)
        </button>

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