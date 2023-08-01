import {ServiceForm} from 'components/ServiceForm/ServiceForm';
import {Services} from 'components/Services/Services';
import {cn} from 'utils/classname';

import '../../styles/root.scss';
import './App.scss';

const block = cn('app');

export function App() {
    return (
        <div className={block()}>
            <ServiceForm />
            <Services />
        </div>
    );
}
