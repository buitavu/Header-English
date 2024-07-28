import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Accountitem.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/daabb3492fb60065fb43903c6239cd39~c5_300x300.webp?lk3s=a5d48078&nonce=76981&refresh_token=4c810cd99ed546bddf02338601134a2b&x-expires=1722070800&x-signature=OEbJtYLM%2F75px9EKRCRZxqP81II%3D&shp=a5d48078&shcp=c1333099"
                alt="hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyenvana</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usernam')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountsItem;
