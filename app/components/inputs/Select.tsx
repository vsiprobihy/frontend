import React from "react";
import * as RadixSelect from "@radix-ui/react-select";

import Icon from "@/app/components/icon/Icon";
import { IconType } from "@/app/enums/icon/icon.type";
import clsx from "clsx";
import Label from "@/app/components/inputs/Label";

type OptionType = {
  value: string;
  label: string;
};

interface SelectProps extends RadixSelect.SelectProps {
  placeholder?: string;
  options: OptionType[];
  label?: {
    text: string;
    icon?: IconType;
  };
}

const Select: React.FC<SelectProps> = ({
  placeholder,
  label,
  options,
  ...rootProps
}) => (
  <div className={`flex flex-col gap-2.5`}>
    {!!label && <Label icon={label.icon}>{label.text}</Label>}
    <RadixSelect.Root {...rootProps}>
      <RadixSelect.Trigger
        // aria-label={"Food"}
        className="data-[placeholder]:grey flex h-[3.25rem] w-full flex-row items-center justify-between gap-2 rounded-[0.75rem] bg-white px-5 font-semibold text-dark placeholder:uppercase placeholder:text-grey focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:uppercase"
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className="text-dark">
          <Icon name={IconType.DOWN} />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="overflow-hidden rounded-lg bg-white shadow">
          <RadixSelect.ScrollUpButton className="flex h-4 w-4 cursor-default items-center justify-center bg-white text-dark">
            <Icon name={IconType.UP} />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="max-w-[calc(100vw-1rem)]">
            <RadixSelect.Group>
              {options.map((option) => (
                <SelectItem value={option.value}>{option.label}</SelectItem>
              ))}
            </RadixSelect.Group>
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
            <Icon name={IconType.DOWN} />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  </div>
);

const SelectItem = React.forwardRef<
  HTMLDivElement,
  RadixSelect.SelectItemProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Item
      className={clsx(
        "data-[highlighted]:text-text-dark relative flex cursor-pointer select-none items-center rounded-lg p-4 pl-8 text-base font-medium leading-none text-dark data-[disabled]:pointer-events-none data-[highlighted]:bg-grey-light data-[disabled]:text-grey data-[highlighted]:outline-none",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="absolute left-2 inline-flex h-4 w-4 items-center justify-center text-dark">
        <Icon name={IconType.CHECK} />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  );
});

export default Select;
