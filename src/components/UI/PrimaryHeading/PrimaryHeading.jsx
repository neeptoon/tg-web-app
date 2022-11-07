import classes from './PrimaryHeading.module.scss';


const PrimaryHeading = ({content}) => {
    return (
        <h1 className={classes.heading}>
            Привет, {content}!
        </h1>
    );
};

export default PrimaryHeading;