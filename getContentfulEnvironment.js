require("dotenv").config();

const contentfulManagement = require("contentful-management");

module.exports = async () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  });

  const space = await contentfulClient.getSpace(
    process.env.REACT_APP_CONTENTFUL_SPACE_ID
  );

  return space.getEnvironment("master");
};
