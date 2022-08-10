const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'Enter your api key here',
    originalImage: (imagePath) => `https://image.tmdb.org/t/p/original/${imagePath}`,
    w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
}
export default apiConfig;

