import { DispatchAction } from '../store'
import { Reducer, AnyAction } from 'redux';

type InventoryState = {
    gumDrops: number;
    laffyTaffy: number;
    pixieStix: number;
    gobstoppers: number;
    marsBars: number;
    jellyBeans: number;
    peanutButterCups: number;
}

const initialState: InventoryState = {
    gumDrops: 0,
    laffyTaffy: 0,
    pixieStix: 0,
    gobstoppers: 0,
    marsBars: 0,
    jellyBeans: 0,
    peanutButterCups: 0,
};

const inventoryReducer: Reducer<InventoryState, AnyAction> = (state = initialState, { type, payload }: AnyAction): InventoryState => {
    switch (type) {
        default:
            return state;
    }
}

export default inventoryReducer;
