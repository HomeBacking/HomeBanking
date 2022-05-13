import styled from "styled-components";
import { primaryColor } from "../../../../theme/colors/colors";
import {
  ParagraphMedium2,
  ParagraphUnderline2,
} from "../../../../theme/paragraph/paragraph";
import { shadownMD, shadownXS } from "../../../../theme/shadown/shadown";

const ActivityContainer = styled.div`
  width: 312px;
  margin: 0 auto;
  margin-bottom: 100px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: ${shadownXS};
  @media screen and (min-width: 744px) {
    width: 544px;
    box-shadow: ${shadownMD};
  }

  @media screen and (min-width: 1512px) {
    width: 595px;
  }
`;

const RenderActivity = styled.div`
  padding: 24px 24px 40px;
  ${ParagraphMedium2} {
    margin: 0;
  }

  @media screen and (min-width: 744px) {
    padding: 32px 32px 40px;
  }
`;

const CardTransfContainer = styled.div`
  margin: 8px 0;
  display: flex;
  flex-direction: column;
`;

const AllActivityBox = styled.div`
  margin-top: 32px;

  ${ParagraphUnderline2} {
    color: ${primaryColor.primary600};
    font-weight: 400;
  }
`;

export {
  ActivityContainer,
  RenderActivity,
  CardTransfContainer,
  AllActivityBox,
};
