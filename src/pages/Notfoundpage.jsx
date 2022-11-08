import {GoBackButton} from '../components/UI/GoBackButton';
import {CustomContainer} from '../components/UI/CustomContainer';
import PrimaryHeading from '../components/UI/PrimaryHeading/PrimaryHeading';

import Warning from '../images/warning.png';

export const Notfoundpage = () => {
    return (
        <>
            <CustomContainer >
                <GoBackButton/>
                <PrimaryHeading>404</PrimaryHeading>
                <p>Страница не найдена. <br/> Вернитесь назад.</p>
                <img src={Warning} alt="Декоративное изображение"/>
            </CustomContainer>


        </>
    );
};
