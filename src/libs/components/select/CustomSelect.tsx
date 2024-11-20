import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import clsx from "clsx";

interface CustomSelectProps<T extends FieldValues> {
  items: { value: string; label: string }[];
  placeholder?: string;
  label?: string;
  name: Path<T>;
  control: Control<T>;
  triggerClassName?: string;
  itemClassName?: string;
  downIconClassname?: string;
}

interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof Select.Item> {
  className?: string;
  children: React.ReactNode;
}

const CustomSelect = <T extends FieldValues>({
  items,
  placeholder = "select..",
  label,
  name,
  control,
  triggerClassName,
  itemClassName,
  downIconClassname,
}: CustomSelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-medium text-dark">
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Select.Root
            onValueChange={onChange}
            value={value}
            onOpenChange={setIsOpen}
          >
            <Select.Trigger
              className={clsx(
                "flex items-center justify-between rounded-lg bg-grey-light p-3 outline-none hover:bg-grey-light",
                triggerClassName
              )}
            >
              <Select.Value
                className="placeholder:text-grey-light-middle"
                placeholder={placeholder}
              />
              <Select.Icon className="text-dark">
                <ChevronDownIcon
                  className={clsx("h-6 w-6", downIconClassname)}
                />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content
                sideOffset={8}
                className="mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white shadow-md"
              >
                <ScrollArea.Root type="auto">
                  <Select.Viewport className="p-2">
                    <ScrollArea.Viewport className="ScrollAreaViewport">
                      <Select.Group>
                        {items.map((item) => (
                          <SelectItem
                            key={item.value}
                            value={item.value}
                            className={itemClassName}
                          >
                            <div className="flex w-full gap-2">
                              {isOpen && (
                                <div className="group-hover:border-gray-400 flex h-5 w-5 items-center justify-center rounded-full bg-grey-light-dark hover:border-4 hover:border-grey-light-middle hover:bg-white focus:border-4 focus:border-dark focus:bg-white focus:outline-none" />
                              )}
                              <p className="text-sm font-medium">
                                {item.label}
                              </p>
                            </div>
                          </SelectItem>
                        ))}
                      </Select.Group>
                    </ScrollArea.Viewport>
                  </Select.Viewport>
                  <ScrollArea.Scrollbar
                    className="ScrollAreaScrollbar"
                    orientation="vertical"
                  >
                    <ScrollArea.Thumb className="[&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar]:w-2" />
                  </ScrollArea.Scrollbar>
                </ScrollArea.Root>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        )}
      />
    </div>
  );
};

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  SelectItemProps
>(({ children, className, ...props }, forwardedRef) => (
  <Select.Item
    className={clsx(
      "flex w-full cursor-pointer items-center rounded-md px-4 py-2 hover:bg-grey-light focus:outline-none focus:ring-0",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <Select.ItemText>{children}</Select.ItemText>
    <Select.ItemIndicator className="text-gray-500 ml-auto"></Select.ItemIndicator>
  </Select.Item>
));

SelectItem.displayName = "SelectItem";

export default CustomSelect;
