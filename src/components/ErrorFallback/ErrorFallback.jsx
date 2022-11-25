import {Errorpage} from '../../pages/Errorpage';

export const ErrorFallback = ({error, resetErrorBoundary}) => {
    return (
        <Errorpage status={600}/>
    );
};
