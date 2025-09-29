import { SiteConfig } from "@/config/SiteConfig";

interface SocialListProps {
    class?: string;
}

export const SocialList = (props: SocialListProps) => {
    const { socialLinks } = SiteConfig;

    return (
        <ul class="flex flex-1 items-center gap-x-2 sm:flex-initial">
            {socialLinks.map(({ Link, Icon }) => (
                <li class="flex">
                    <a
                        class="inline-block sm:hover:text-link"
                        href={Link}
                        rel={`noreferrer`}
                        target="_blank"
                    >
                        <Icon class={props.class} />
                    </a>
                </li>
            ))}
        </ul>
    );
};
