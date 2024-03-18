import { getStores } from '../model/stores';

export default defineEventHandler(() => {
    const storesData = getStores();
    return storesData;
});
