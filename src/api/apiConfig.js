const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '9025041f851d172cd3d42ea8491c076b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;