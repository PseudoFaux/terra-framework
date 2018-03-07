import Utils from '../../src/_Utils';

const MockConfig = userData =>
  [
    {
      key: Utils.KEYS.MENU,
      title: Utils.TITLES.MENU,
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [
        Utils.KEYS.USER_INFORMATION,
        Utils.KEYS.SETTINGS,
        Utils.KEYS.HELP,
        Utils.KEYS.LOG_OUT,
        'additional-item-1',
        'additional-item-2',
        'additional-item-3',
      ],
    },
    {
      key: Utils.KEYS.USER_INFORMATION,
      title: Utils.TITLES.USER_INFORMATION,
      content: userData,
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [
        Utils.KEYS.CHANGE_PHOTO,
      ],
    },
    {
      key: Utils.KEYS.SETTINGS,
      title: Utils.TITLES.SETTINGS,
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [
        Utils.KEYS.APPEARANCE,
        Utils.KEYS.SECURITY,
      ],
    },
    {
      key: Utils.KEYS.LOG_OUT,
      title: Utils.TITLES.LOG_OUT,
      contentLocation: Utils.LOCATIONS.FOOTER,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: Utils.KEYS.HELP,
      title: Utils.TITLES.HELP,
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [
        Utils.KEYS.GETTING_STARTED,
        Utils.KEYS.ABOUT,
        Utils.KEYS.TERMS_OF_USE,
      ],
    },
    {
      key: Utils.KEYS.CHANGE_PHOTO,
      title: Utils.TITLES.CHANGE_PHOTO,
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: Utils.KEYS.APPEARANCE,
      title: Utils.TITLES.APPEARANCE,
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: Utils.KEYS.SECURITY,
      title: Utils.TITLES.SECURITY,
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: Utils.KEYS.GETTING_STARTED,
      title: Utils.TITLES.GETTING_STARTED,
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: Utils.KEYS.ABOUT,
      title: Utils.TITLES.ABOUT,
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: Utils.KEYS.TERMS_OF_USE,
      title: Utils.TITLES.TERMS_OF_USE,
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: 'additional-item-1',
      title: 'Additional Item 1',
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: ['additional-item-1.1', 'additional-item-1.2'],
    },
    {
      key: 'additional-item-1.1',
      title: 'Additional Item 1.1',
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: true,
      childKeys: [],
    },
    {
      key: 'additional-item-1.2',
      title: 'Additional Item 1.2',
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: false,
      isSelectable: true,
      childKeys: [],
    },
    {
      key: 'additional-item-2',
      title: 'Additional Item 2',
      contentLocation: Utils.LOCATIONS.FOOTER,
      isSelected: false,
      isSelectable: true,
      childKeys: [],
    },
    {
      key: 'additional-item-3',
      title: 'Additional Item 3',
      contentLocation: Utils.LOCATIONS.BODY,
      isSelected: true,
      isSelectable: true,
      childKeys: [],
      id: 'test-additional-item-3',
    },
  ];

export default MockConfig;

