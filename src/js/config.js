const env = process.env;
let baseUrl = ({
    development: 'https://rapapi.renqilai.com',
})[env];
export {
    baseUrl
}