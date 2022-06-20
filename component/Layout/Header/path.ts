interface PathName {
  name: string;
  href: string;
  subRoute: string[];
}

export const defaultPaths: PathName[] = [
 
  {
    name: 'About Us',
    href: '/about',
    subRoute: [],
  },
  {
    name: 'Contact Us',
    href: '/contact',
    subRoute: [],
  },
];

