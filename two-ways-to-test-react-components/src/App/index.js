import { observer } from 'mobx-react';
import container from './container';
import App from './component';
import './style';

export default container(observer(App));
