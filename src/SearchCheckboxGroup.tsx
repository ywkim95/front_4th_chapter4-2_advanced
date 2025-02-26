import { memo } from "react";
import {
  FormControl,
  FormLabel,
  CheckboxGroup,
  Checkbox,
  HStack,
} from "@chakra-ui/react";

const SearchCheckboxGroup = memo(
  ({
    label,
    values,
    options,
    onChange,
  }: {
    label: string;
    values: (string | number)[];
    options: { value: string | number; label: string }[];
    onChange: (values: (string | number)[]) => void;
  }) => {
    return (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <CheckboxGroup
          value={values.map(String)}
          onChange={(value) =>
            onChange(
              value.map((v) => (typeof values[0] === "number" ? Number(v) : v))
            )
          }
        >
          <HStack spacing={4}>
            {options.map(({ value, label }) => (
              <Checkbox key={value} value={String(value)}>
                {label}
              </Checkbox>
            ))}
          </HStack>
        </CheckboxGroup>
      </FormControl>
    );
  }
);

export default SearchCheckboxGroup;
