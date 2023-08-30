const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('./Images', false));
const imagesPlus = importAll(require.context('./Images/ImagesPlus', false));
console.log(images);
console.log(imagesPlus);
const itemData = [
  {
    img: images[0],
    imgPlus: imagesPlus[0],
    title: 'Ginko Biloba',
    author: 'FoliFlore',
    description: 'Dernier représentant d\'une famille apparue il y a plus de 270 millions d\'années, l’arbre aux quarante écus Ginkgo biloba peut vivre plus de 1000 ans. C\'est une espèce dioïque : un individu est soit mâle soit femelle.',

  },
  {
    img: images[1],
    imgPlus: imagesPlus[1],
    title: 'Asiminier',
    author: 'FoliFlore',
    description: 'Ce petit arbre originaire d’Amérique du Nord de la famille des annonacées développe un fruit de couleur vert jaune à maturité qui est dégusté cru, en crème glacée, sorbet, boisson fermentée ou pâtisserie. Le goût rappelle à la fois l’ananas et la banane à la texture fondante.',

  },

];
export default itemData;
