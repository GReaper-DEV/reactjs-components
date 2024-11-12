import PropTypes from 'prop-types';
import {twMerge} from 'tailwind-merge';
import classNames from 'classnames';

function Button({
                    children,
                    text,
                    primary,
                    secondary,
                    success,
                    warning,
                    danger,
                    outline,
                    rounded,
                    ...rest
                }) {

    const classes = twMerge(
        classNames(rest.className,'px-3 py-1.5 border flex items-center gap-2', {
            'border-blue-500 bg-blue-500 text-white hover:border-blue-500 hover:bg-white hover:text-blue-500 transition': primary,
            'border-gray-900 bg-gray-900 text-white hover:border-gray-500 hover:bg-white hover:text-gray-500 transition': secondary,
            'border-green-500 bg-green-500 text-white hover:border-green-500 hover:bg-white hover:text-green-500 transition': success,
            'border-yellow-400 bg-yellow-400 text-white hover:border-yellow-500 hover:bg-white hover:text-yellow-500 transition': warning,
            'border-red-500 bg-red-500 text-white hover:border-red-500 hover:bg-white hover:text-red-500 transition': danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition': outline && primary,
            'text-gray-900 hover:border-gray-500 hover:bg-gray-500 hover:text-white transition': outline && secondary,
            'text-green-500 hover:border-green-500 hover:bg-green-500 hover:text-white transition': outline && success,
            'text-yellow-400 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white transition': outline && warning,
            'text-red-500 hover:border-red-500 hover:bg-red-500 hover:text-white transition': outline && danger
        })
    );

    Button.propTypes = {
        checkVariationValue: ({primany, secondary, success, warning, danger}) => {
            const count =
                Number(!!primany) +
                Number(!!secondary) +
                Number(!!success) +
                Number(!!warning) +
                Number(!!danger);
            if (count > 1) {
                throw Error('Button Component -> Please choose only one value between primany, secondary, success, warning, danger.')
            }
        },
        outline: PropTypes.bool,
        rounded: PropTypes.bool,
    }

    return <button {...rest} className={classes}>{children}</button>
}

export default Button;