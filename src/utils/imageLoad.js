import notLoaded from '../images/not-loaded.png'

export const getImage = (imageName) => {
    const image = new Image();
    image.src = imageName;
    return image.complete
        ? imageName
        : notLoaded;
};