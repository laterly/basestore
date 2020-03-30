const env = process.env;
let baseUrl = ({
    development: 'https://rapapi.renqilai.com',
    production: 'https://rapapi.renqilai.com'
})[env];
export {
    baseUrl
}