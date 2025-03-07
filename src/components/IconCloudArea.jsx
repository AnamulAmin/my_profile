import { IconCloud } from "../components/magicui/icon-cloud";
const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "figma",
  "mongodb",
  "mongoose",
  "greensock",
  "framer",
  "expo",
  "threedotjs",
  "jquery",
  "jsonwebtokens",
  "electron",
  "clerk",
  "redux",
  "tailwindcss",
  "postman",
  "vite",
  "amazonwebservices",
  "amazons3",
  "npm",
  "warp",
  "axios",
  "digitalocean",
];

export function IconCloudArea() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden ml-auto">
      <IconCloud images={images} />
    </div>
  );
}
