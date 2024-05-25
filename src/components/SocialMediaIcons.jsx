import { ICONS } from "../utils/IconsMedia";

export const SocialMediaIcons = () => {
  return (
    <div className="social-media">
      {ICONS.map((icon, index) => {
        const IconMedia = icon.icon;
        return (
          <a
            key={index}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.label}
          >
            <IconMedia />
          </a>
        );
      })}
    </div>
  );
};
