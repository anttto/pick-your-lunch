<template>
    <div class="fixed bottom-0 flex flex-col justify-center w-full h-16 text-center bg-black text-white">
        <button @click="openListAll" class='allStore'>
            {{ storeList === false ? '식당 전체 보기' : '닫기' }}
        </button>
        <div v-if="storeList"
            class="absolute bottom-16 bg-gray-300 text-[#565656] w-full h-[40vh] overflow-scroll py-4">
            <ul class="listWrap">
                <li v-for="(store, idx) in stores">
                    {{ store.name }}
                </li>
            </ul>
        </div>
        <span class='mt-1'>자료출처: Mean's Big-Data</span>
    </div>
</template>

<script setup lang="ts">

const { stores } = await useGetStores();
const storeList = ref(false);

const openListAll = () => {
    storeList.value = !storeList.value;
};

</script>

<style scoped></style>