import React from "react";
import {
  useQuery,
  gql
} from "@apollo/client";
  
export default function ExchangeRates() {
    const { loading, error, data } = useQuery(gql`
        {
            rates(currency: "USD") {
            currency
            rate
            }
        }
    `);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
            <p>
            {currency}: {rate}
            </p>
        </div>
    ));
}