import { NavigationMenu, Tutorial } from '@app/dashboard/shared/models';

export const navigationMenus: NavigationMenu[] =
[
    {
        menuItem: 'Notifications',
        href: './Notifications.html'
    },
    {
        menuItem: 'Profiling',
        href: 'profile'
    }
];

export const tutorials: Tutorial[] = [
    {
        tutorialItem: 'Re-submit evidence',
        href: './resubmit.html'
    },
    {
        tutorialItem: 'Reporting',
        href: './reporting.html'
    }
];
