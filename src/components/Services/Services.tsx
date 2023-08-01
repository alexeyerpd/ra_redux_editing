import * as React from 'react';
import {Service} from 'components/Service/Service';
import {useSelector} from 'react-redux';
import {RootState} from 'ui/redux/store';
import {cn} from 'utils/classname';

import './Services.scss';

const block = cn('services');

export function Services() {
    const {services, serviceForm} = useSelector<RootState, RootState>((state) => state);

    const filteredServices = React.useMemo(() => {
        return services.filter((s) =>
            s.title.toLowerCase().includes(serviceForm.service.title.toLowerCase()),
        );
    }, [services, serviceForm.service.title]);

    return (
        <ul className={block()}>
            {filteredServices.map((item) => (
                <Service key={item.id} data={item} />
            ))}
        </ul>
    );
}
