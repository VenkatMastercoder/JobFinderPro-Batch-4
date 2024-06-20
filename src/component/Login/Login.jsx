import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  age: z.string().min(2, { message: "Required" }),
  email: z.string().email(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      name: "Venkat",
      age: "1",
    },
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    // async request which may result error
    try {
      console.log(data);
      // await fetch()
    } catch (e) {
      // handle your error
    }
  };

  return (
    <>
      <h1>Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border border-red-500">
          <label htmlFor="name">Name :</label>
          <input id="name" placeholder="Enter a Name" {...register("name")} />
          <p>{errors?.name?.message}</p>
        </div>

        <div className="border border-red-500">
          <label htmlFor="age">age :</label>
          <input id="age" placeholder="Enter a Age" {...register("age")} />
          <p>{errors?.age?.message}</p>
        </div>

        <div className="border border-red-500">
          <label htmlFor="age">Email :</label>
          <input id="age" placeholder="Enter a Mail" {...register("email")} />
          <p>{errors?.email?.message}</p>
        </div>

        <button type="submit">Submit</button>
      </form>

      <p>{isValid && <span>Form Vaild</span>}</p>
      <p>{!isValid && <span>Form InVaild</span>}</p>
      <p>{isDirty && <span>Form has been Modified</span>}</p>
      <p>{!isDirty && <span>Form has been not Modified</span>}</p>
    </>
  );
};

export default Login;
