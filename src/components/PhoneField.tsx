"use client";

import { useState } from "react";
import {
  validatePhoneNumberLength,
  type CountryCode,
} from "libphonenumber-js";
import PhoneInput, { type Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";

export function PhoneField() {
  const [value, setValue] = useState<Value>();
  const [country, setCountry] = useState<CountryCode>("US");

  function handleChange(next: Value) {
    if (!next) {
      setValue(undefined);
      return;
    }

    // Block digits beyond what this country allows
    if (validatePhoneNumberLength(next, country) === "TOO_LONG") {
      return;
    }

    setValue(next);
  }

  return (
    <label className="block sm:col-span-2">
      <span className="mb-2 block text-[13px] font-medium text-white/70">
        Phone number
      </span>
      <PhoneInput
        international
        defaultCountry="US"
        country={country}
        onCountryChange={(next) => {
          if (next) setCountry(next);
        }}
        countryCallingCodeEditable={false}
        limitMaxLength
        value={value}
        onChange={handleChange}
        placeholder="Enter phone number"
        className="phone-field"
        numberInputProps={{
          className:
            "PhoneInputInput h-12 w-full bg-transparent text-[15px] text-white outline-none placeholder:text-white/35",
          inputMode: "numeric",
        }}
      />
      <input type="hidden" name="phone" value={value ?? ""} />
    </label>
  );
}
