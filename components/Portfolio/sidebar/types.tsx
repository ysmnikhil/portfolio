
export interface SidebarLink {
    label: string,
    href: string,
    component: string,
    icon: string,
}

export const sideBar: SidebarLink[] = [
    {
        label: 'About Me',
        href: '/about-me',
        component: 'FaceSmileIcon',
        icon: 'assets/images/sidebar/face-smile.svg',
    },
    {
        label: 'Work Exprience',
        href: '/work',
        component: 'BriefcaseIcon',
        icon: 'assets/images/sidebar/brief-case.svg',
    },
    {
        label: 'Last Project',
        href: '/project-last',
        component: 'CodeBracketSquareIcon',
        icon: 'assets/images/sidebar/code-bracket-square.svg',
    },
    {
        label: 'Projects',
        href: '/projects',
        component: 'BookOpenIcon',
        icon: 'assets/images/sidebar/book-open.svg',
    },
    {
        label: 'Technologies',
        href: '/technologies',
        component: 'Square3Stack3DIcon',
        icon: 'assets/images/sidebar/square-stack.svg',
    },
    {
        label: 'Bio',
        href: '/bio',
        component: 'UserCircleIcon',
        icon: 'assets/images/sidebar/user-circle.svg',
    },
    {
        label: 'Contact',
        href: '/contact',
        component: 'IdentificationIcon',
        icon: 'assets/images/sidebar/identification.svg',
    },
    {
        label: 'Follow Me',
        href: '/follow',
        component: 'UserPlusIcon',
        icon: 'assets/images/sidebar/user-plus.svg',
    }
];