export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
        extractComponentDescription: (component, { notes }) => {
            if (notes) {
                return typeof notes === 'string' ? notes : '<style>h1{display:block;}</style>' + notes.markdown || notes.text;
            }
            return null;
        }
    }
};
