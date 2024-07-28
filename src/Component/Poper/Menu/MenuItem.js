import Button from '~/Component/Button';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
const cx = classNames.bind(style);
function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
