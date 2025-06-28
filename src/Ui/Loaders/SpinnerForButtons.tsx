import { type JSX } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const SpinnerForButtons = (): JSX.Element => {
    return (
        <span
            className="SpinnerForButtons"
            style={{
                display: 'block',
                transform: 'translateY(3px) scale(1.4)',
            }}
        >
            <CircularProgress sx={{ color: '#565656' }} size={16} />
        </span>
    );
};

export default SpinnerForButtons;
