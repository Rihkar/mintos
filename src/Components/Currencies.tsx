/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import { useState } from 'react';
import CurrencyList, { CurrencyType } from '../Data/CurrencyList';

const Currencies = () => {
  const [currencyArray, setCurrencyArray] = useState<CurrencyType[]>(CurrencyList);

  const toggleSelected = (currency:CurrencyType) => {
    setCurrencyArray(currencyArray.map((item) => {
      if (item.id === currency.id) {
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    }));
  };
  return (
    <div className="container">
      <div className="container__currency">
        {currencyArray.filter((el) => el.isSelected && el.currency).map((curr) => (
          <div className="selected-currency" key={Math.random()}>
            <span>{curr.currency.toLowerCase()}</span>
            <button
              className="button-remove"
              onClick={() => {
                toggleSelected(curr);
              }}
            >
              <b>X</b>
            </button>
          </div>
        ))}

      </div>

      <div className="container__currency padding-top">
        {currencyArray.map((curr) => (
          <button
            className={`big-button-add   ${curr.isSelected && 'selected-button'} `}
            key={Math.random()}
            onClick={() => {
              toggleSelected(curr);
            }}
          >
            <button
              className="small-button-add"
            >
              {curr.isSelected && 'X'}

            </button>
            {curr.currency}

          </button>
        ))}
      </div>
    </div>
  );
};
export default Currencies;
