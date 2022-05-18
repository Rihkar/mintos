/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import CurrencyList, { CurrencyType } from '../Data/CurrencyList';

const Currencies = () => {
  const [currencyArray, setCurrencyArray] = useState<CurrencyType[]>(CurrencyList);

  const toggleSelected = (curr:CurrencyType) => {
    setCurrencyArray(currencyArray.map((c) => {
      if (c.id === curr.id) {
        return { ...c, isSelected: !c.isSelected };
      }
      return c;
    }));
  };
  return (
    <div className="container">
      <div className="container__currency">
        {currencyArray.filter((el) => el.isSelected && el.currency).map((curr) => (
          <div style={{ width: '30%' }} className="selected-currency" key={Math.random()}>
            <span style={{ color: 'black', backgroundColor: '#d6d0d0' }}>{curr.currency.toLowerCase()}</span>
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
            style={curr.isSelected ? { backgroundColor: 'white' } : { backgroundColor: '#d6d0d0' }}
            className="big-button-add"
            key={Math.random()}
            onClick={() => {
              toggleSelected(curr);
            }}
          >
            <button
              style={curr.isSelected ? { backgroundColor: 'white' } : { backgroundColor: '#d6d0d0' }}
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
