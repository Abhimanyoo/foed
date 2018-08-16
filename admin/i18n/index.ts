import i18next from 'i18next';

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        form: {
          multiPick: {
            searchPlaceholder: 'Search…',
            selectedText: '$1 of $2 selected',
            noneSelectedText: 'None selected',
            selectAllButton: 'Select all',
            selectNoneButton: 'Select none',
          },
        },
      },
    },
  },
});
