import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
// import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import Button from '~/Component/Button';
import { Wrapper as PopperWrapper } from '~/Component/Poper';
import AccountsItem from '~/Component/Accountitem';
import Menu from '~/Component/Poper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English and tavu',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: './feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    {/* <img src={images.logo} alt="Tiktok" /> */}
                    <img
                        width="70%"
                        src="https://learn.mochidemy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.807b1bbb.png&w=384&q=75"
                        alt="tiktok"
                    />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    content="Tìm kiếm"
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountsItem />
                                <AccountsItem />
                                <AccountsItem />
                                <AccountsItem />
                                <AccountsItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faXmark} /> {/* close */}
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        {/* loadding */}

                        {/* cái totip  */}
                        <button className={cx('search-btn')}>
                            {/* icon search */}
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>{' '}
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary>login</Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
