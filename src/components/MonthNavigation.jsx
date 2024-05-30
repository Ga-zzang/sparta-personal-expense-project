import styled from "styled-components";
import { Section } from "../Home";

const MonthWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

const MonthButton = styled.button`
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    
    display: flex;
    height: 60px;
    padding: 20px;
    width: 100px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    }
`;

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function MonthNavigation() {

    return(
        <Section>
            <MonthWrapper>
                {MONTHS.map((month) => (
                    <MonthButton key={month}>{`${month}월`}</MonthButton>
                ))}
            </MonthWrapper>
        </Section>
    );
}