export const PAGES_MENU = [
  {
    path: 'views',
    children: [
      {
        path: 'home',
        data: {
          menu: {
            title: 'Home',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },
      {
        path: 'messageboard',
        data: {
          menu: {
            title: 'Message Board',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'Charts',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },
      {
        path: 'backoffice',
        data: {
          menu: {
            title: 'Backoffice',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      }
    ]
  }
];
