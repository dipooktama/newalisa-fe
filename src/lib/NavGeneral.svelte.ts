import type { NavLinks } from "./types/NavLinks"
export function createNavs() {
    const NavGeneral: NavLinks[] = [
        {
            link: "/home",
            text: "home"
        },
        {
            link: "/chats",
            text: "chats"
        }
    ]
    let items = $state(NavGeneral)
    return {
        get items() {
            return items
        },

        set setItems(val: NavLinks[]) {
            items = val
        },

        reset() {
            items = NavGeneral
        }
    }
}

export const Navs = createNavs()

