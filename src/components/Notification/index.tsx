import { formatDistanceToNow } from "date-fns";
import { getMessageByNotificationType, NotificationTypes } from "../../helpers/notifications";
import {
    Avatar,
    Container,
    TextContainer,
    PostName,
    Username,
    NotificationDot,
    NotificationMessage,
    GroupName,
    PostPicture,
    PrivateMessageBox
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
                <NotificationMessage>
                    <Username>
                        {notification.username}
                    </Username>

                    {getMessageByNotificationType(notification.type)}

                    {getAdditionalContentByType(notification)}

                    {notification.payload.isNew && <NotificationDot />}
                </NotificationMessage>

                <time>{formatDistanceToNow(new Date(notification.payload.createdAt))}</time>

                {
                    (notification.type === NotificationTypes['NEW-PRIVATE-MESSAGE'] && notification.payload.message)
                    &&
                    <PrivateMessageBox>
                        <p>{notification.payload.message}</p>
                    </PrivateMessageBox>
                }
            </TextContainer>

            {
                (notification.type === NotificationTypes['NEW-PICTURE-COMMENT'] && notification.payload.pictureUrl)
                &&
                <PostPicture>
                    <img src={notification.payload.pictureUrl} />
                </PostPicture>
            }
        </Container>
    )
}