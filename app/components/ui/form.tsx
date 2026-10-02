import type { ReactNode } from 'react';

export const INPUT_CLASS =
  'w-full rounded-sm border border-input-line bg-white px-4 py-3 text-[0.9375rem] text-ink ' +
  'placeholder:text-ink-muted/80 focus:border-navy';

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  children: ReactNode;
};

/** Label plus control. The label is tied to the control by id. */
export function Field({ id, label, required, optional, hint, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-red-700"> *</span>}
        {optional && <span className="ml-1 font-normal text-ink-muted">(optional)</span>}
        {hint && <span className="ml-1 font-normal text-ink-muted">{hint}</span>}
      </label>
      {children}
    </div>
  );
}
