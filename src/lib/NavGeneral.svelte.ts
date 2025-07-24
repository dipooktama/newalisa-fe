import type { NavLinks } from "./types/NavLinks"
export function createNavs() {
    const NavGeneral: NavLinks[] = [
        {
            link: "/home",
            text: "Beranda"
        },
        {
            link: "/chats",
            text: "Obrolan"
        },
        {
            link: "/course-structures",
            text: "Struktur Matkul"
        },
        {
            link: "/course-contents",
            text: "Konten Matkul"
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

