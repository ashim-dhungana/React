import { useState } from "react";
import "./App.css";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      {isSubmitting && <div>Loading...</div>}

      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* Handling General error in input field */}
          <input
            type="text"
            placeholder="name"
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 10,
            })}
          />
          {errors.name && <div>There is an error</div>}

          <br />

          {/* Handling specific error according to validation rule */}
          <input
            placeholder="username"
            type="text"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min Length is 3" },
              maxLength: { value: 10, message: "Max Length is 10" },
            })}
          />
          {errors.username && (
            <div className="red"> {errors.username.message} </div>
          )}

          <br />

          <input
            placeholder="password"
            {...register("password")}
            type="password"
          />

          <hr />

          <input disabled={isSubmitting} type="submit" value="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
