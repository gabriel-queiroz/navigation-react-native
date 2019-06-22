import styled from 'styled-components/native';
import { ContainerStyle, TitleStyle } from '~/styles';

export const Container = styled.View`
  ${() => ContainerStyle}

`;

export const Title = styled.Text`
    ${() => TitleStyle}
    color: #458FD3;
`;
