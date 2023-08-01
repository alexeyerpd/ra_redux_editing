import {useDispatch, useSelector} from 'react-redux';
import {editField, removeService} from 'ui/redux/actions/actions';
import {RootState} from 'ui/redux/store';
import {cn} from 'utils/classname';

import './Service.scss';

const block = cn('service');

interface ServiceProps {
    data: {
        id: string;
        title: string;
        price: number;
    };
}

export function Service({data}: ServiceProps) {
    const {serviceForm, services} = useSelector<RootState, RootState>((state) => state);
    const dispatch = useDispatch();

    const onEdit = () => {
        const service = services.find((s) => s.id === data.id);
        if (service) {
            dispatch(editField(service));
        }
    };

    const onRemove = () => {
        dispatch(removeService(data.id));
    };

    const disabled = serviceForm.mode === 'edit';

    return (
        <li className={block()}>
            {data.title} - {data.price}{' '}
            <button className={block('btn')} onClick={onEdit} disabled={disabled}>
                E
            </button>
            <button className={block('btn')} onClick={onRemove} disabled={disabled}>
                X
            </button>
        </li>
    );
}
