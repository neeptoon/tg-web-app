import classes from './PrimaryHeading.module.scss';


const PrimaryHeading = ({children}) => {
    return (
        <h1 className={classes.heading}>
            {children}
        </h1>
    );
};

export default PrimaryHeading;