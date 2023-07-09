import imageUrlBuilder from '@sanity/image-url';

import sanityClient from './sanity';



export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source);
