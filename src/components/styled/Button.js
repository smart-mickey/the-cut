import styled from 'styled-components';
import Ripple from 'react-native-material-ripple';
import {dySize} from '../../utils/responsive';
import {Colors} from '../../themes';

export const BarButton = styled(Ripple)`
  border: 1px solid ${(props) => props.borderColor || Colors.gray};
  border-radius: ${(props) => dySize(props.br || 8)}px;
  border-width: ${(props) => (props.bordered ? 1 : 0)}
  padding: ${(props) => dySize(props.padding || 5)}px;
  width: ${(props) => (props.width ? `${dySize(props.width)}px` : 'auto')};
  height: ${(props) => (props.height ? `${dySize(props.height)}px` : 'auto')};
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  margin-top: ${(props) => dySize(props.mt || 0)}px;
  margin-bottom: ${(props) => dySize(props.mb || 0)}px;
  margin-left: ${(props) => dySize(props.ml || 0)}px;
  margin-right: ${(props) => dySize(props.mr || 0)}px;
  background-color: ${(props) => props.background || 'transparent'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
