const checkForImage = (url) => {
    if(!url) return false;

    else {
        const pattern = new RegExp('^(https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|svg|webp)$', 'i');
        return !!pattern.test(url);
    }
}

export { checkForImage };