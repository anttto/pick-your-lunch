// 스토어 호출
export const useGetStores = async () => {
    const { data, refresh } = await useFetch('/api/stores', {
        method: 'GET',
    });
    return { stores: data, refresh };

    //$fetch
    // const dataGo = ref(null);
    // const requestCodeFc = async () => {
    //     const data = await $fetch('/api/stores', {
    //         method: 'GET',
    //     });
    //     dataGo.value = data;
    // };

    // return { stores: dataGo, requestCodeFc };
};
