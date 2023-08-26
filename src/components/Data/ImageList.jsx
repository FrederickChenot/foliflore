const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('./Images', false));
console.log('*********', images);

const itemData = [
  {
    img: images[0],
    title: 'Ginko Biloba',
    author: 'FoliFlore',
    description: 'Dernier représentant d\'une famille apparue il y a plus de 270 millions d\'années, l’arbre aux quarante écus Ginkgo biloba peut vivre plus de 1000 ans. C\'est une espèce dioïque : un individu est soit mâle soit femelle.',

  },
  // {
  //   img: images[1],
  //   title: 'Chêne rouge',
  //   author: '@rollelflex_graphy726',
  //   description: 'description chene rouge',
  // },
  // {
  //   // img: images.find((image) => image.includes('Ginkgo biloba L')),
  //   img: images[2],
  //   title: 'Camera',
  //   author: '@helloimnik',
  //   description: 'description camera',
  // },
  {
    img: images[3],
    title: 'Asiminier Triloba',
    description: 'Ce petit arbre originaire d’Amérique du Nord de la famille des annonacées développe un fruit de couleur vert jaune à maturité qui est dégusté cru, en crème glacée, sorbet, boisson fermentée ou pâtisserie. Le goût rappelle à la fois l’ananas et la banane à la texture fondante.',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //   title: 'Hats',
  //   author: '@hjrc33',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //   title: 'Honey',
  //   author: '@arwinneil',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //   title: 'Basketball',
  //   author: '@tjdragotta',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //   title: 'Fern',
  //   author: '@katie_wasserman',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   title: 'Mushrooms',
  //   author: '@silverdalex',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //   title: 'Tomato basil',
  //   author: '@shelleypauls',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  //   title: 'Sea star',
  //   author: '@peterlaster',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  //   title: 'Bike',
  //   author: '@southside_customs',
  // },
];
export default itemData;
