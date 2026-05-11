import { t } from "@/contexts/i18n";
import { Info, AlertCircle } from "lucide-react";

export const Field = ({
    label,
    required,
    error,
    hint,
    children,
  }: {
    label: string;
    required?: boolean;
    error?: string;
    hint?: string;
    children: React.ReactNode;
  }) => (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1.5 text-sm font-medium text-neutral-dark">
        {label}
        {required && <span className="text-error text-xs">*</span>}
        {!required && (
          <span className="text-xs text-neutral-medium font-normal">({t("optional")})</span>
        )}
      </label>
      {hint && (
        <p className="text-xs text-neutral-medium flex items-center gap-1">
          <Info size={11} /> {hint}
        </p>
      )}
      {children}
      {error && (
        <p className="text-xs text-error flex items-center gap-1">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
);