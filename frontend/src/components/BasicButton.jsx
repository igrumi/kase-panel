import { Link } from "react-router-dom";

export default function Button({ text, href = "#", position = "center" }) {
  let alignClass = "";

  if (position === "left") alignClass = "justify-start";
  else if (position === "right") alignClass = "justify-end";
  else alignClass = "justify-center";

  const classes = "bg-donkey hover:bg-westar text-romance font-semibold py-2 px-6 rounded-lg shadow transition-all";

  const isInternalRoute = href.startsWith("/");
  const isAnchorLink = href.startsWith("#");
  const isExternalLink = href.startsWith("http://") || href.startsWith("https://");

  return (
    <div className={`flex ${alignClass} w-full`}>
      {isInternalRoute ? (
        <Link to={href} className={classes}>
          {text}
        </Link>
      ) : (
        <a
          href={href}
          className={classes}
          {...(isExternalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {text}
        </a>
      )}
    </div>
  );
}
