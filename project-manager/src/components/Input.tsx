import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    textarea?: boolean;
  };

export default function Input({
  label,
  textarea = false,
  ...props
}: InputProps) {
  const classes =
    "w-full p1 border p-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 resize-none focus:outline-none";
  return (
    <div className="flex flex-col space-y-1">
      <label className={"font-medium text-sm"}>{label}</label>
      {textarea ? (
        <textarea {...props} className={classes} />
      ) : (
        <input {...props} className={classes} />
      )}
    </div>
  );
}
