/* Some validation functions for forms */

// This requires that there is a text value in a field
export const isRequired = (value) => (
    value == undefined || (value && (value.trim() == ''))
        ? 'Required'
        : undefined
);
