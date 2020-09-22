import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      {/* Price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // part of the Homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={(e) => {
          console.log("hello im in click =" + basket.length + user);
          // user && basket.length > 0 &&
          if (user && basket.length > 0) {
            history.push("/payment");
          } else if (user && basket.length === 0) {
            history.push("/");
          } else if (user === null && basket.length === 0) {
            history.push("/");
          } else if (user === null && basket.length > 0) {
            history.push("/login");
          }
        }}
        //  onClick={(e) => history.push("/payment")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
