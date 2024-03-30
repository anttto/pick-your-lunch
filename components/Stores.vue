<template>
    <div>
        <RandomPick :stores="stores" />
        <div class=" min-h-[50vh]">Location</div>
    </div>
</template>

<script setup lang="ts">
interface Store {
    name: string;
    position: number;
    avg: number;
}
const { stores } = await useGetStores();


</script>

<style scoped></style>