import styled from "styled-components";
import MonthNavigation from "./components/MonthNavigation";

const Container = styled.main`
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
`;

export const Section = styled.section`
    background-color: #ffffff;
    border-radius: 16px;
    padding: 20px;
`;

export default function Home() {
    return (
        <Container>
            <MonthNavigation />
            <Section>지출 입력</Section>
            <Section>지출 리스팅</Section>
        </Container>
    );
}