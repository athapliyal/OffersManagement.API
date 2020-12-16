interface NavigationItem {
    title: string;
    url: string;
    icon: string;
    className: string;
}

export const navigationItems: NavigationItem[] = [
    {
        title: "Plexure Campaigns",
        url: "/",
        icon: "",
        className: "navbar-brand"
    },
    {
        title: "Offers",
        url: "/offers",
        icon: "fas fa-tags",
        className: "nav-link"
    },
    {
        title: "Importer",
        url: "/bulk-import",
        icon: "fas fa-upload",
        className: "nav-link"
    },
    {
        title: "Calendar",
        url: "/offer-calendar",
        icon: "fas fa-calendar-times",
        className: "nav-link"
    }
]