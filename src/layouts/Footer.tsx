import { SiteConfig } from "@/config/SiteConfig";
import { MenuLinks } from "@/config/MenuLinks";
import { SocialList } from "@/components/SocialList";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer class="mt-auto flex w-full flex-col items-center justify-center gap-y-2 pb-4 pt-20 text-center align-top font-semibold text-gray-600 dark:text-gray-400 sm:flex-row sm:justify-between sm:text-xs">
            <div class="me-0 sm:me-4 flex items-center gap-x-2">
                &copy; {SiteConfig.author} {year}
                <SocialList class="h-5 w-5" />
            </div>
            <nav
                aria-label="More on this site"
                class="flex gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-gray-500"
            >
                {MenuLinks.map((link) => (
                    <a
                        class="px-4 py-2 sm:py-0 sm:hover:text-textColor sm:hover:underline"
                        href={link.href}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </footer>
    );
};
