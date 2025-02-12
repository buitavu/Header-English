import style from './Poper.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);
function wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default wrapper;
