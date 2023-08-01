import {ServiceDto} from '../types';

import {
    ADD_SERVICE,
    CHANGE_MODE,
    CHANGE_SERVICE_FIELD,
    CLEAR_SERVICE_FIELD,
    EDIT_FIELD,
    REMOVE_SERVICE,
    UPDATE_SERVICE,
} from './actionTypes';

export function addService(title: string, price: number) {
    return {type: ADD_SERVICE, payload: {title, price}} as const;
}

export function removeService(id: string) {
    return {type: REMOVE_SERVICE, payload: {id}} as const;
}

export function updateService(service: ServiceDto) {
    return {type: UPDATE_SERVICE, payload: {service}} as const;
}

export function changeServiceField(name: string, value: any) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}} as const;
}

export function clearServiceField() {
    return {type: CLEAR_SERVICE_FIELD} as const;
}

export function changeMode(mode: 'edit' | 'create') {
    return {type: CHANGE_MODE, payload: {mode}} as const;
}

export function editField(service: ServiceDto) {
    return {type: EDIT_FIELD, payload: {service}} as const;
}
