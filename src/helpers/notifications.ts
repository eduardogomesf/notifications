export const NOTIFICATIONS_TYPES = {
    'NEW-POST-REACTION': 'reacted to your recent post',
    'NEW-FOLLOWER': 'followed you',
    'NEW-GROUP-JOINER': 'has joined your group',
    'NEW-PRIVATE-MESSAGE': 'sent you a private message',
    'NEW-PICTURE-COMMENT': 'commented on your picture',
    'LEFT-GROUP': 'left the group',
} as const

export enum NotificationTypes {
    'NEW-POST-REACTION' = 'NEW-POST-REACTION',
    'NEW-FOLLOWER' = 'NEW-FOLLOWER',
    'NEW-GROUP-JOINER' = 'NEW-GROUP-JOINER',
    'NEW-PRIVATE-MESSAGE' = 'NEW-PRIVATE-MESSAGE',
    'NEW-PICTURE-COMMENT' = 'NEW-PICTURE-COMMENT',
    'LEFT-GROUP' = 'LEFT-GROUP'
}

export function getMessageByNotificationType (type: NotificationTypes) {
    return NOTIFICATIONS_TYPES[type] || ''
}