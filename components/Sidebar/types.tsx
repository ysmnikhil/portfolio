
export interface SidebarLink {
    label: string,
    href: string,
    component: string,
}

export const sideBar: SidebarLink[] = [
    {
        label: 'About Me',
        href: '#about-me',
        component: 'FaceSmileIcon',
    },
    {
        label: 'Work Exprience',
        href: '#work',
        component: 'BriefcaseIcon',
    },
    {
        label: 'Last Project',
        href: '#project-last',
        component: 'CodeBracketSquareIcon',
    },
    {
        label: 'Projects',
        href: '#projects',
        component: 'BookOpenIcon',
    },
    {
        label: 'Technologies',
        href: '#technologies',
        component: 'Square3Stack3DIcon',
    },
    {
        label: 'Bio',
        href: '#bio',
        component: 'UserCircleIcon',
    },
    {
        label: 'Contact',
        href: '#contact',
        component: 'IdentificationIcon',
    },
    {
        label: 'Follow Me',
        href: '#follow',
        component: 'UserPlusIcon',
    }
];