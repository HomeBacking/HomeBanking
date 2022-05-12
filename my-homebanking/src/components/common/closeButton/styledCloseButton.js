import styled from "styled-components";
import { neutralColor } from "../../../theme/colors/colors";

const CloseButtonContainer = styled.div`
  margin-bottom: 44px;
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  padding-right: 36px;
`;

const CloseButtonContent = styled.span`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${neutralColor.neutral100};
  border-radius: 100%;
`;

export { CloseButtonContainer, CloseButtonContent };
