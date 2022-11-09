import classes from './PrimaryHeading.module.scss';


export const PrimaryHeading = ({children}) => {
    return (
        <h1 className={classes.heading}>
            {children}
        </h1>
    );
};
