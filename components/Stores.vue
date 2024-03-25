<template>
    <div>
        <RandomPick :stores="stores" />
        <div v-if="storeList">
            <ul class="listWrap">
                <li v-for="(store, idx) in stores">
                    {{ store.name }}
                </li>
            </ul>
        </div>
        <button @click="testRefresh">재호출</button>
        <div>
            <button @click="openListAll" class='allStore'>
                {{ storeList === false ? '식당 전체 보기' : '닫기' }}
            </button>
            <span class='mt-1'>자료출처: Mean's Big-Data</span>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Store {
    name: string;
    position: number;
    avg: number;
}
const { stores, refresh } = await useGetStores();
const storeList = ref(false);

const openListAll = () => {
    storeList.value = !storeList.value;
};

const testRefresh = () => {
    refresh();
}

</script>

<style scoped></style>