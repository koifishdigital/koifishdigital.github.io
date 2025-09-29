import { MenuLinks } from "@/config/MenuLinks";
import { createSignal } from "solid-js";
import { FaSolidBars } from "solid-icons/fa";

export const Header = () => {
    const [menuOpen, setMenuOpen] = createSignal(false);

    return (
        <header
            class="group relative mb-8 flex justify-between items-center"
            id="main-header"
        >
            <div class="flex sm:flex-col">
                <a
                    href="/"
                    onclick={() => setMenuOpen(false)}
                    class="text-xl font-bold sm:text-2xl"
                >
                    Koi Fish Digital
                </a>
                <nav
                    aria-label="Main menu"
                    class={`absolute -inset-x-4 top-14 ${menuOpen() ? "flex" : "hidden"} flex-col items-end gap-y-4 rounded-md bg-bgColor/[.85] py-4 text-accent shadow backdrop-blur sm:static sm:z-auto sm:-ms-4 sm:mt-4 sm:flex sm:flex-row sm:items-center sm:rounded-none sm:bg-transparent sm:py-0 sm:shadow-none sm:backdrop-blur-none`}
                    id="navigation-menu"
                >
                    {MenuLinks.map((link) => (
                        <a
                            class="px-4 py-4 underline-offset-2 sm:py-0 sm:hover:underline"
                            onclick={() => setMenuOpen(false)}
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
            <button
                aria-expanded={menuOpen()}
                aria-haspopup="menu"
                aria-label="Open main menu"
                class="group relative ms-4 h-7 w-7 sm:invisible sm:hidden"
                id="toggle-navigation-menu"
                type="button"
                onClick={() => setMenuOpen(!menuOpen())}
            >
                <FaSolidBars class="absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-all" />
            </button>
        </header>
    );
};
