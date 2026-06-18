type ClassName = string | false | null | undefined;

/**
 * Merge class name strings, filtering out falsy values.
 * Used by every component that accepts an optional `className` prop.
 *
 * Example:
 *   cn('px-4 py-2', isActive && 'bg-primary', className)
 */
export function cn(...inputs: ClassName[]): string {
  return inputs.filter(Boolean).join(' ');
}
