# Minimized OpenAPI Documentation Template

This is a minimized version of the [Docusaurus OpenAPI Docs Template](https://github.com/PaloAltoNetworks/docusaurus-template-openapi-docs.git), built for [Docusaurus 3](https://docusaurus.io/). It has been stripped down to include only the essential components needed for API documentation.

## What's Included

1. The Petstore API example with OpenAPI specification

All other components have been removed to create a minimal starting point for your API documentation.

### Installation

```bash
# Clone this repository
git clone <your-repository-url>
cd <repository-name>

# Install dependencies
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window at http://localhost:3000. Most changes are reflected live without having to restart the server.

### Key Features

1. **API Documentation** - See the Petstore API example at http://localhost:3000/docs/petstore/swagger-petstore-yaml

### Adding Your Own API

1. Place your OpenAPI specification file in the `examples/` directory
2. Update the `docusaurus.config.ts` file to include your API specification:

```typescript
plugins: [
  [
    "docusaurus-plugin-openapi-docs",
    {
      id: "openapi",
      docsPluginId: "classic",
      config: {
        yourapi: {  // Change this to your API name
          specPath: "examples/your-api-spec.yaml",  // Path to your OpenAPI spec
          outputDir: "docs/yourapi",  // Output directory for generated docs
          sidebarOptions: {
            groupPathsBy: "tag",
            categoryLinkSource: "tag",
          },
        },
      },
    },
  ],
]
```

3. Run `npm run gen-api-docs` to generate the API documentation
4. Update the `sidebars.ts` file to include your API in the sidebar

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
