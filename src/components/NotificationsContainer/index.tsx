import { Container, Header } from "./styles";

export function NotificationsContainer () {
    return (
        <Container>
            <Header>
                <div>
                    <strong>Notifications</strong>
                    <div>
                        <span>3</span>
                    </div>
                </div>

                <button>Mark all as read</button>
            </Header>
        </Container>
    )
}