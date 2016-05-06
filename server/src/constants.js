const DEV_ELASTICSEARCH_CONN_STR = 'http://localhost';
const DEV_MONGO_DB_CONN_STR = 'http://localhost';

const DEV_AZURE_STORAGE_CONN_STR = 'DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;QueueEndpoint=http://127.0.0.1:10001/devstoreaccount1;';

module.exports = {
    ELASTICSEARCH_CONN_STR: process.env.SEARCHLY_URL || DEV_ELASTICSEARCH_CONN_STR,
    MONGO_DB_CONN_STR: process.env.MONGO_URL || DEV_MONGO_DB_CONN_STR,
    AZURE_STORAGE_CONN_STR: process.env.AZURE_STORAGE_CONN_STR || DEV_AZURE_STORAGE_CONN_STR
};