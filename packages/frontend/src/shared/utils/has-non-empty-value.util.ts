export const hasNonEmptyValue = (values: object) => {
    return Object.values(values).some((value) => {
        if (typeof value === 'string') {
            return value.trim() !== '';
        }
        if (typeof value === 'object' && value !== null) {
            return value.label?.trim() !== '' || value.value?.trim() !== '';
        }
        return false;
    });
};
