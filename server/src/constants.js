const DEV_HTTP_PORT = 3000;
const DEV_ELASTICSEARCH_URL = 'http://localhost:9200';
const DEV_MONGO_DB_URL = 'http://localhost:27017';

const DEV_AZURE_STORAGE_CONN_STR = 'DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;QueueEndpoint=http://127.0.0.1:10001/devstoreaccount1;';

module.exports = {
    HTTP_PORT: process.env.PORT || DEV_HTTP_PORT,
    ELASTICSEARCH_URL: process.env.SEARCHLY_URL || DEV_ELASTICSEARCH_URL,
    MONGO_DB_URL: process.env.MONGO_URL || DEV_MONGO_DB_URL,
    AZURE_STORAGE_CONN_STR: process.env.AZURE_STORAGE_CONN_STR || DEV_AZURE_STORAGE_CONN_STR,
    AZURE_BLOB_CONTAINER_NAME: 'tracks'
};