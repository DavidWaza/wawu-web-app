import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
const SelectComponent = () => {
  return (
    <div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="All Time" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Moments</SelectLabel>
            <SelectItem value="days">Days</SelectItem>
            <SelectItem value="weeks">Weeks</SelectItem>
            <SelectItem value="months">Months</SelectItem>
            <SelectItem value="years">Years</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectComponent;
