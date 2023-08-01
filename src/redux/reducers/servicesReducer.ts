import {createId} from 'utils/createId';

import {addService, removeService, updateService} from '../actions/actions';
import {ADD_SERVICE, REMOVE_SERVICE, UPDATE_SERVICE} from '../actions/actionTypes';
import {ServiceDto} from '../types';

const initialState: ServiceDto[] = [];

type Action =
    | ReturnType<typeof addService>
    | ReturnType<typeof removeService>
    | ReturnType<typeof updateService>;

export function servicesReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ADD_SERVICE: {
            const {title, price} = action.payload;
            return [...state, {id: createId(), title, price: Number(price)}];
        }

        case REMOVE_SERVICE: {
            const {id} = action.payload;
            return state.filter((s) => s.id !== id);
        }

        case UPDATE_SERVICE: {
            const {service} = action.payload;
            const index = state.findIndex((s) => s.id === service.id);
            if (index === -1) {
                return state;
            } else {
                return [...state.slice(0, index), service, ...state.slice(index + 1)];
            }
        }

        default:
            return state;
    }
}
