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
    align-items: center;
    gap: 1.25rem;
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

export const Message = styled.strong`
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;

    color: ${({ theme }) => theme.colors["dark-grey-blue"]};
`

export const Username = styled.span`
    margin-right: 5px;

    font-weight: 800;
    font-size: 1rem;
    line-height: 20px;

    color: ${({ theme }) => theme.colors["very-dark-gray-blue"]};
`

export const PostName = styled.span`
    margin-left: 6px;

    font-weight: 800;
    font-size: 1rem;
    line-height: 20px;

    color: ${({ theme }) => theme.colors["dark-grey-blue"]};
`


export const GroupName = styled.span`
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