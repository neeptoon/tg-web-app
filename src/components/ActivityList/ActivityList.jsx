import {ActivityItem} from '../ActivityItem';

export const ActivityList = ({activities}) => {
    return (
        <ul>
            {activities.map((activity, index) => <ActivityItem key={index} title={activity}/>) }
        </ul>
    );
};
