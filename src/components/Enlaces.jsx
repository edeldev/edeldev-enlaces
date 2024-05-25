import { MEDIA_ENLACES } from "../utils/Enlaces";

export const Enlaces = () => {
  return (
    <div className="content-enlaces">
      {MEDIA_ENLACES.map((enlaces, index) => {
        const IconEnlaces = enlaces.icon;
        return (
          <a
            key={index}
            href={enlaces.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={enlaces.texto}
          >
            <IconEnlaces />
            <p>{enlaces.texto}</p>
          </a>
        );
      })}
    </div>
  );
};
