// import { faPassport } from '@fortawesome/free-solid-svg-icons';
import style from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    rounded = false,
    children,
    text = false,
    disabled = false,
    leftIcon,
    RightIcon,
    onClick,
    className = false,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        delete props.onClick;
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        text,
        disabled,
        large,
        [className]: className,
        rounded,
    });

    return (
        <div>
            <Comp className={classes} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
            </Comp>
        </div>
    );
}

export default Button;
