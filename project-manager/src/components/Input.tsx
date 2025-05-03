import React, { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    textarea?: boolean;
  };

const input = forwardRef(function Input(
  { label, textarea = false, ...props }: InputProps,
  ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>
) {
  const classes =
    "w-full p1 border p-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 resize-none focus:outline-none";
  return (
    <div className="flex flex-col space-y-1">
      <label className={"font-medium text-sm"}>{label}</label>
      {textarea ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...props}
          className={classes}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          {...props}
          className={classes}
        />
      )}
    </div>
  );
});
export default input;
