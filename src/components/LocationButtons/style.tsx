import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    padding: 0 10px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const Button = styled.button<{ index: number }>`
    margin: 5px;

    ${({ index }) => index < 3 ? `
        &:nth-child(${index + 1}) {
            width: 30%;
        }
    ` : `
    &:nth-child(${index + 1}) {
            width: 40%;
        }
    `}
`;