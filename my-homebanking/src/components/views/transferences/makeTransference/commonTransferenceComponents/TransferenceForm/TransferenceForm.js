import React, { createRef, useState } from "react";
import { Button } from "../../../../../../theme/buttons/buttons";
import {
  ParagraphMedium3,
  ParagraphSemibold2,
} from "../../../../../../theme/paragraph/paragraph";
import { AccountCard } from "../../../../../common/accountCard/AccountCard";
import { SecondaryNav } from "../../../../../common/navs/secondaryNav/SecondaryNav";
import { TransferencePopup } from "../../../../../common/popup/transferencePopup/TransferencePopup";
import {
  AccountContainer,
  AmountBox,
  AmountContent,
  AmountInput,
  TransactionContent,
  TransactionForm,
} from "./styleTransferenceForm";

export const TransferenceForm = ({ children, shortNavText, largeNavText }) => {
  const [amount, setAmount] = useState({ amount: "" });
  const [buttonIsDisable, setButtonIsDisable] = useState(true);
  const ref = createRef();
  console.log(amount);

  const handleKeyUp = () => {
    amount.amount.length !== 0
      ? setButtonIsDisable(false)
      : setButtonIsDisable(true);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const reg = /([0-9][.]{0,1})$/g;

    const test = reg.test(value);

    e.target.value === "" && setAmount({ amount: "" });

    test && setAmount({ ...amount, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ingresa", amount.amount);
  };

  return (
    <>
      <SecondaryNav shortNavText={shortNavText} largeNavText={largeNavText} />
      <TransactionForm onSubmit={handleSubmit}>
        <TransactionContent>
          <AmountBox>
            <AmountContent>
              <AmountInput
                type="text"
                name="amount"
                autoComplete="off"
                placeholder="00.00"
                value={amount.amount}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
              />

              <ParagraphMedium3>Monto a enviar</ParagraphMedium3>
            </AmountContent>
          </AmountBox>
          <AccountContainer>
            <div>
              <ParagraphSemibold2>Cuenta de cargo</ParagraphSemibold2>
              <AccountCard />
            </div>
            <div>
              <ParagraphSemibold2>Cuenta de destino</ParagraphSemibold2>
              {children}
            </div>
          </AccountContainer>
          <TransferencePopup tranfToAnotherAccountURL="">
            <Button
              ref={ref}
              className={`${buttonIsDisable === true ? "disable" : ""}`}
              disabled={buttonIsDisable}
              type="submit"
            >
              Confirmar transferencia
            </Button>
          </TransferencePopup>
        </TransactionContent>
      </TransactionForm>
    </>
  );
};
