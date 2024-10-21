import { useState } from "react";
import "./App.css";

// Using React Hook Form
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // Simulating a 2 second delay
    await delay(2);
    console.log(data);

    let r = await fetch ("http://localhost:3000/")
    let res = await r.text()
    console.log(data,res)


    // Handling server-side error
    if (data.username !== "ashim") {
      setError("myform", {
        message: "The form is not valid according to server",
      });
    }
    if (data.name === "newuser") {
      setError("block", {
        message: "This user is blocked",
      });
    }
  };

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
          {errors.myform && <div> {errors.myform.message} </div>}
          {errors.block && <div> {errors.block.message} </div>}
        </form>
      </div>
    </>
  );
}

export default App;
