import {changeMode, changeServiceField, clearServiceField, editField} from '../actions/actions';
import {CHANGE_MODE, CHANGE_SERVICE_FIELD, CLEAR_SERVICE_FIELD, EDIT_FIELD} from '../actions/actionTypes';
import {ServiceDto} from '../types';

const initialState: {service: ServiceDto; mode: 'create' | 'edit'} = {
    service: {id: '', title: '', price: 0},
    mode: 'create',
};

type Action =
    | ReturnType<typeof changeServiceField>
    | ReturnType<typeof clearServiceField>
    | ReturnType<typeof changeMode>
    | ReturnType<typeof editField>;

export function serviceFormReducer(state = initialState, action: Action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD: {
            const {name, value} = action.payload;
            return {...state, service: {...state.service, [name]: value}};
        }

        case CLEAR_SERVICE_FIELD: {
            return initialState;
        }

        case CHANGE_MODE: {
            const {mode} = action.payload;
            return {...state, mode};
        }

        case EDIT_FIELD: {
            const {service} = action.payload;
            return {mode: 'edit' as const, service};
        }

        default:
            return state;
    }
}
