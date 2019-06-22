import styled from 'styled-components/native';
import { ContainerStyle, TitleStyle } from '~/styles';

export const Container = styled.View`
  ${() => ContainerStyle};
  background-color: #ffffff;
`;

export const Title = styled.Text`
  ${() => TitleStyle}
  color: #458FD3;


`;
