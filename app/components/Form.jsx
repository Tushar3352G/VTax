"use client";
import React from "react";
import VerticalTabs from "./VerticalTabs";
import { useState } from "react";

const Form = ({ formInputs, category, btext, handleForm }) => {
  const [selectedService, setSelectedService] = useState("");
  return (
    <form
      className="w-full md:w-[90%] lg:w-[80%]"
      onSubmit={(e) => handleForm(e, selectedService)}
    >
      {formInputs.map((inputs, key) => (
        <div key={key} className="grid gap-4 mb-3 md:grid-cols-2">
          {Array.isArray(inputs) ? (
            inputs.map((input, index) =>
              input.input === "select" ? (
                <select
                  key={index}
                  name={input.name}
                  className="bg-zinc-100 h-14 w-full text-base rounded-lg md:rounded-xl px-5 outline-blue-200"
                  required={input.required}
                >
                  {input.option.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  key={index}
                  className="bg-zinc-100 w-full h-14 text-base rounded-lg md:rounded-xl px-5 outline-blue-200"
                  type={input.input}
                  name={input.name}
                  placeholder={input.holdertext}
                  required={input.required}
                  min={input.min}
                  max={input.max}
                  pattern={input.pattern}
                  title={input.title}
                  autoFocus={key == 0 && index == 0}
                />
              )
            )
          ) : (
            <>
              <input
                key={inputs.name}
                className="bg-zinc-100 h-14 text-base rounded-lg md:rounded-xl px-5 outline-blue-200"
                type={inputs.input}
                name={inputs.name}
                placeholder={inputs.holdertext}
                required={inputs.required}
                min={inputs.min}
                max={inputs.max}
                pattern={inputs.pattern}
                title={inputs.title}
              />
              {category && (
                <VerticalTabs onServiceSelect={setSelectedService} />
              )}
            </>
          )}
        </div>
      ))}
      
      <textarea
        className="w-full bg-zinc-100 rounded-lg md:rounded-xl resize-y h-60 outline-blue-200 text-base py-4 px-5 max-h-80 min-h-50"
        name="comment"
        placeholder="Write Your Comment"
        required
      ></textarea>

      <button type="submit" className="button-primary border-0 !px-15 mt-4">
        {btext ? btext : "Submit"}
      </button>
    </form>
  );
};

export default Form;
