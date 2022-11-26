import { Notification } from "../Notification";
import { Container, Header, NotificationsList } from "./styles";
import notificationsJSON from '../../data/notifications.json'

export function NotificationsContainer () {
    const totalOfNewNotifications = notificationsJSON.filter(notification => notification.payload.isNew === true).length

    return (
        <Container>
            <Header>
                <div>
                    <strong>Notifications</strong>
                    <div>
                        <span>{totalOfNewNotifications}</span>
                    </div>
                </div>

                <button>Mark all as read</button>
            </Header>

            <NotificationsList>
                {notificationsJSON.map(notification => (
                    <Notification notification={notification} key={notification.username + notification.avatarUrl} />
                ))}
            </NotificationsList>
        </Container>
    )
}