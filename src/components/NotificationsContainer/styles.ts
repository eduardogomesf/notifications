import styled from "styled-components";

export const Container = styled.main`
    margin: 4rem auto 0;
    padding: 2rem 2rem 0.25rem;
    max-width: 45.625rem;
    width: 100%;

    box-shadow: 0px 20px 60px rgba(73, 97, 168, 0.05);

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;

    @media (max-width: 400px) {
        margin: auto;
        padding: 1.5rem;
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        > strong {
            font-weight: 800;
            font-size: ${({ theme }) => theme.fonts.lg};
            line-height: 30px;
            
            color: ${({ theme }) => theme.colors["very-dark-gray-blue"]};
        }

        > div {
            padding: 0.15rem 0.75rem;

            background-color: ${({ theme }) => theme.colors.blue};
            
            border-radius: 6px;

            span {
                font-weight: 800;
                line-height: 20px;

                color: ${({ theme }) => theme.colors.white};
            }
        }
    }

    > button {
        border: none;
        background-color: transparent;

        font-weight: 500;
        font-size: ${({ theme }) => theme.fonts.md};
        line-height: 20px;
        text-align: right;
        
        color: ${({ theme }) => theme.colors["dark-grey-blue"]};

        &:hover {
            transition: color 0.2s;
            color: ${({ theme }) => theme.colors.blue};
        }
    }
`

export const NotificationsList = styled.ul`
    margin-top: 2rem;

    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`