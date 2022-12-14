import React from "react";
import { useForm } from "react-hook-form";

const FormCard = () => {
  const { register, handleSubmit, reset } = useForm();
  const submit=(data)=>{
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="">CARDHOLDER NAME</label>
        <input type="text" {...register("cardName")} placeholder="e.g. Jane Appleseed" />
      </div>
      <div>
        <label htmlFor="">CARD NUMBER</label>
        <input
          type="text"
          minLength={16}
          maxLength={16}
          {...register("cardNumber")}
          placeholder="e.g 1234 5678 9123 0000"
        />
      </div>
      <div>
        <div>
          <label htmlFor="">EXP. DATE (MM/YY)</label>
          <input type="text" placeholder="MM" {...register("month")}/>
          <input type="text" placeholder="YY"{...register("year")}/>
        </div>
        <div>
          <label htmlFor="">CVC</label>
          <input type="text" placeholder="e.g. 123" {...register("cvc")} />
        </div>
      </div>
      <button>Confirm</button>
    </form>
  );
};

export default FormCard;
