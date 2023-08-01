import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addService, changeServiceField, clearServiceField, updateService} from 'ui/redux/actions/actions';
import {RootState} from 'ui/redux/store';
import {cn} from 'utils/classname';

import './ServiceForm.scss';

const block = cn('service-form');

export function ServiceForm() {
    const serviceForm = useSelector<RootState, RootState['serviceForm']>((state) => state.serviceForm);
    const {service, mode} = serviceForm;
    const dispatch = useDispatch();

    const firstInputRef = React.useRef<HTMLInputElement>(null);

    const setFocusOnInput = () => {
        if (firstInputRef.current) {
            firstInputRef.current.focus();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        dispatch(changeServiceField(name, value));
    };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (mode === 'edit') {
            dispatch(updateService(service));
        } else {
            if (!service.title || !service.price) return;
            dispatch(addService(service.title, service.price));
        }
        dispatch(clearServiceField());
        setFocusOnInput();
    };
    const handleCancel = () => {
        dispatch(clearServiceField());
    };

    return (
        <form className={block()} onSubmit={handleSave}>
            <input
                className={block('input')}
                ref={firstInputRef}
                type="text"
                name="title"
                value={service.title}
                onChange={handleChange}
            />
            <input
                className={block('input')}
                type="text"
                name="price"
                value={service.price || ''}
                onChange={handleChange}
            />
            <button className={block('btn')}>Save</button>
            {mode === 'edit' && (
                <button type="button" className={block('btn')} onClick={handleCancel}>
                    Cancel
                </button>
            )}
        </form>
    );
}
