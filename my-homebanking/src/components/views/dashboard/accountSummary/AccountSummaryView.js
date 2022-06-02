import React, { useContext } from "react";
import { infoColor } from "../../../../theme/colors/colors";
import { HeadingSemiBold3 } from "../../../../theme/heading/heading";
import {
  ParagraphMedium2,
  ParagraphMedium3,
  ParagraphSemibold3,
} from "../../../../theme/paragraph/paragraph";
import { CopyAccion } from "../../../common/copyAccion/CopyAccion";
import { Notification } from "../../../common/notification/Notification";
import { Popup } from "../../../common/popup/Popup";
import { SendButton } from "../../../common/sendButton/SendButton";
import {
  AccountSummary,
  AccountSummaryContent,
  NumberAccount,
  SavingType,
} from "./styleAccountSummary";
import AccountContext from "../../../../context/accountContext/AccountContext";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { AccountCard } from "../../../common/accountCard/AccountCard";
import {
  ActiveAccountIcon,
  BackgroundIconOfActiveAccoun,
} from "../../../common/accountCard/styleAccountCard";

export const AccountSummaryView = () => {
  const notificationText = "Número de cuenta copiado";
  const notificationColor = infoColor.info900;
  const ref = React.createRef();
  const emailInToken = localStorage.getItem("data");

  const { accountNumber, balance, currency, allAccountsByUser } =
    useContext(AccountContext);
  console.log("todas las cuentas por usuario", allAccountsByUser);
  return (
    <AccountSummary>
      <AccountSummaryContent>
        <SavingType>
          <ParagraphMedium3>{currency.currencyText}</ParagraphMedium3>
          <Popup
            action={
              <ParagraphSemibold3 ref={ref}>Cambiar cuenta</ParagraphSemibold3>
            }
            headerText="Cambiar Cuenta"
            height="auto"
          >
            {allAccountsByUser.map((el) => (
              <AccountCard
                key={el.id}
                typeSaving={el.currencyText}
                accountNumber={el.accountNumber}
              >
                {emailInToken === el.email && (
                  <BackgroundIconOfActiveAccoun>
                    <ActiveAccountIcon icon={faCheck} />
                  </BackgroundIconOfActiveAccoun>
                )}
              </AccountCard>
            ))}
          </Popup>
        </SavingType>
        <HeadingSemiBold3>
          {currency.currencySymbol}
          {balance}
        </HeadingSemiBold3>
        <NumberAccount>
          <ParagraphMedium2>{accountNumber}</ParagraphMedium2>
          <CopyAccion
            numberAccount={accountNumber}
            notificationText={notificationText}
            notificationColor={notificationColor}
          />
          <Notification background="#F0F9FF" />
        </NumberAccount>
        <Popup
          action={<SendButton ref={ref} text="Enviar Dinero" />}
          headerText="Enviar Dinero"
        >
          <SendButton text="A otra cuenta" extraText="San Patrick" />
          <SendButton text="A cuenta propia" />
        </Popup>
      </AccountSummaryContent>
    </AccountSummary>
  );
};
