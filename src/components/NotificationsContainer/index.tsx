import { Notification } from "../Notification";
import { Container, Header, NotificationsList } from "./styles";
import notificationsJSON from '../../data/notifications.json'
import { useState } from "react";

export function NotificationsContainer () {
    let [notifications, setNotifications] = useState(notificationsJSON)

    const totalOfNewNotifications = notifications.filter(notification => notification.payload.isNew === true).length

    function handleReadAll () {
        const allReadNotifications = notifications.map(notification => {
            const newNotificationData = { ...notification }

            newNotificationData.payload.isNew = false

            return newNotificationData
        })

        setNotifications(allReadNotifications)
    }

    return (
        <Container>
            <Header>
                <div>
                    <strong>Notifications</strong>
                    <div>
                        <span>{totalOfNewNotifications}</span>
                    </div>
                </div>

                <button onClick={handleReadAll}>Mark all as read</button>
            </Header>

            <NotificationsList>
                {notifications.map(notification => (
                    <Notification notification={notification} key={notification.username + notification.avatarUrl} />
                ))}
            </NotificationsList>
        </Container>
    )
}