const azureStorage = require('azure-storage');
const moment = require('moment');
const path = require('path');

const {
  AZURE_STORAGE_CONN_STR,
  AZURE_BLOB_CONTAINER_NAME
} = require('./constants');

const blobService = azureStorage.createBlobService(AZURE_STORAGE_CONN_STR);

const createSasPolicy = () => {
  const fiveMinutesAgo = moment().subtract(5, 'minutes');
  const anHourLater = moment().add(1, 'hours');
  
  return {
    AccessPolicy: {
      Permissions: azureStorage.BlobUtilities.SharedAccessPermissions.READ,
      Start: fiveMinutesAgo.toDate(),
      Expiry: anHourLater.toDate()
    },
  };
};

const createSas = blobName => {
  blobService.getBlobToText(AZURE_BLOB_CONTAINER_NAME, blobName, (err, result) => console.log(err));
  const sap = createSasPolicy();  
  return blobService.generateSharedAccessSignature(AZURE_BLOB_CONTAINER_NAME, 
    blobName, sap);
};
    
const generateReadOnlyUrl = blobName => {
  const sas = createSas(blobName);
  const primaryHost = blobService.host.primaryHost;
  const uri = path.join(primaryHost, blobName);
  return `${uri}?${sas}`;
};

module.exports = {
  generateReadOnlyUrl
};