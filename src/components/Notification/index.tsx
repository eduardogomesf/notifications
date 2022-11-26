import { getMessageByNotificationType, NotificationTypes } from "../../helpers/notifications";
import {
    Avatar,
    Container,
    TextContainer,
    PostName,
    Username,
    NotificationDot,
    Message,
    GroupName
} from "./styles";

type NotificationType = {
    username: string
    avatarUrl: string
    type: any,
    payload: any
}

type NotificationProps = {
    notification: NotificationType
}

function getAdditionalContentByType (notification: NotificationType) {
    if (NotificationTypes["NEW-POST-REACTION"] === notification.type) {
        return <PostName>{notification.payload.postName}</PostName>
    } else if (
        NotificationTypes['NEW-GROUP-JOINER'] === notification.type
        ||
        NotificationTypes['LEFT-GROUP'] === notification.type
    ) {
        return <GroupName>{notification.payload.groupName}</GroupName>
    } else {
        return <></>
    }
}

export function Notification ({ notification }: NotificationProps) {
    return (
        <Container isNew={notification.payload.isNew}>
            <Avatar src={notification.avatarUrl} alt='an user avatar photo' />
            <TextContainer>
                <div>
                    <Message>
                        <Username>
                            {notification.username}
                        </Username>

                        {getMessageByNotificationType(notification.type)}

                        {getAdditionalContentByType(notification)}
                    </Message>

                    {notification.payload.isNew && <NotificationDot />}
                </div>
                <time>{notification.payload.createdAt}</time>
            </TextContainer>
        </Container>
    )
}