"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { resolve } from "path";
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { object, z } from "zod";

const createImageSchema = z.object({
  imgName: z.string().max(10, "name can't exceed 10 characters"),
  object: z.string(),
  difficulty: z.string(),
  
});
// }).refine(data => data.imgName in imgNames, {
// message: "Name already taken",
// path: ["imgName"]
// } )

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm({
    resolver: zodResolver(createImageSchema),
  });

  async function handleFormData(data: FieldValues) {
    console.log("Hello");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
    console.log(data.object)

  }

  return (
    <>
      <form onSubmit={handleSubmit(handleFormData)}>
        <ul>
          <li>
            <label htmlFor="imgName">Image Name:</label>
            <input
              {...register("imgName")}
              type="text"
              name="imgName"
              className="border-2"
              placeholder="potat"
            />
          </li>
          <li>
            {errors.imgName && (
              <p className="text-red-500">{`${errors.imgName.message}`}</p>
            )}
          </li>
          <li>
            <label htmlFor="object">object:</label>
            <input
              {...register("object")}
              type="text"
              name="object"
              className="border-2"
            />
          </li>
          <li>
            <label htmlFor="difficulty">Difficulty:</label>
            <input
              {...register("difficulty")}
              type="text"
              name="difficulty"
              className="border-2"
            />
          </li>
        </ul>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-400 disabled:bg-slate-500"
        >
          Submit
        </button>
      </form>
    </>
  );
}
