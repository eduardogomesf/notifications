import styled from "styled-components";

type ContainerProps = {
    isNew: boolean
}

export const Container = styled.li<ContainerProps>`
    width: 100%;
    padding: 1.25rem;

    border-radius: 8px;

    background-color: ${({ theme, isNew }) => isNew ? theme.colors.snow : 'transparent'};

    display: flex;
    align-items: flex-start;
    gap: 1.25rem;

    cursor: pointer;
`

export const Avatar = styled.img`
    width: 45px;
    height: 45px;
`

export const TextContainer = styled.div`
    > div {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    > time {
        display: block;
        margin-top: 5px;

        font-weight: 500;
        font-size: 1rem;
        line-height: 20px;

        color: ${({ theme }) => theme.colors["grey-blue"]};
    }
`

export const NotificationMessage = styled.strong`
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;

    color: ${({ theme }) => theme.colors["dark-grey-blue"]};
`

export const Username = styled.a`
    margin-right: 5px;

    font-weight: 800;
    font-size: 1rem;
    line-height: 20px;

    color: ${({ theme }) => theme.colors["very-dark-gray-blue"]};

    &:hover {
        transition: color 0.2s;
        color: ${({ theme }) => theme.colors.blue};
    }
`

export const PostName = styled.a`
    margin-left: 6px;

    font-weight: 800;
    font-size: 1rem;
    line-height: 20px;

    color: ${({ theme }) => theme.colors["dark-grey-blue"]};

    &:hover {
        transition: color 0.2s;
        color: ${({ theme }) => theme.colors.blue};
    }
`


export const GroupName = styled.a`
    margin-left: 6px;

    font-weight: 800;
    font-size: 1rem;
    line-height: 20px;

    color: ${({ theme }) => theme.colors.blue};
`

export const NotificationDot = styled.div`
    width: 8px;
    height: 8px;
    
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.red};
`

export const PostPicture = styled.a`
    margin-left: auto;

    > img {
        width: 45px;
        height: 45px;
    
        border-radius: 7px;
    }

`

export const PrivateMessageBox = styled.div`
    margin-top: 1rem;
    padding: 1.25rem;

    border: 1px solid ${({ theme }) => theme.colors["very-light-grey-blue"]};
    border-radius: 5px;

    &:hover {
        transition: background-color 0.2s;
        background-color: ${({ theme }) => theme.colors["very-light-grey-blue"]};
    }

    > p {
        font-weight: 500;
        font-size: 1rem;
        line-height: 20px;

        color: ${({ theme }) => theme.colors["dark-grey-blue"]};
    }
`