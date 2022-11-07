import ActivityItem from '../ActivityItem/ActivityItem';

const ActivityList = ({activities}) => {
    return (
        <ul>
            {activities.map(activity => <ActivityItem key={activity.id}/>) }
        </ul>
    );
};

export default ActivityList;