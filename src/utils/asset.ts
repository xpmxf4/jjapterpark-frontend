export const getImage = (src: string) => `/assets/${src}`;
export const getLogo = (name: string) => getImage(`logo/${name}`);
export const getIcon = (name: string) => getImage(`icon/${name}`);
