export const navItems = [
  { name: "A propos", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Je suis à la recherche d'une alternance ",
    description: "Pour propulser ma carrière ",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "justify-end",
    img: "/pdp.jpeg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Basé à Toulouse",
    description: "Je reste ouvert au télétravail",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Ma stack",
    description: "Mes technos favorites",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Amateur de tech avec une passion pour le développement et la photographie",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "En train de construire un site de stockage de fichiers",
    description: "Mon projet actuel",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Mon profil vous intéresse ?",
    description: "Envoyez moi un message !",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Jotion, un clone de Notion",
    des: "Un clone de Notion, créé avec Next.js, Tailwind, Shadcn, et Convex",
    img: "/p1.svg",
    iconLists: [
      "/next.svg",
      "/re.svg",
      "/ts.svg",
      "/tail.svg",
      "/convex.png",
      "/c.svg",
    ],
    link: "https://note-taking-app-six-mauve.vercel.app/",
  },
  {
    id: 2,
    title: "FDrive, stockage de fichiers",
    des: "Application de stockage de fichiers, similaire à Google Drive, créé avec Next.js et Convex",
    img: "/p2.svg",
    iconLists: [
      "/next.svg",
      "/re.svg",
      "/ts.svg",
      "/tail.svg",
      "/convex.png",
      "/c.svg",
    ],
    link: "https://github.com/antoinevignes/file-storage-app",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/antoinevignes",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/antoine-vignes/",
  },
];
