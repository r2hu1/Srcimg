
# Srcing

Srcing is a cloud image storage service that allows you to generate direct image links. This project is built with Next.js and utilizes Cloudinary for image storage and MongoDB for data management.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Configuration](#configuration)
4. [Deployment](#deployment)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

To install Srcing and its dependencies, run the following command:

```bash
npm install
```

## Usage

Srcing provides a simple way to store images in the cloud and generate direct image links. To run the development server, use:

```bash
npm run dev
```

## Configuration

Before deploying Srcing, make sure to configure the following environment variables:

- `CLOUDINARY_API_KEY`: Your Cloudinary API key.
- `CLOUDINARY_PRESET_NAME`: Your Cloudinary preset name.
- `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name.
- `MONGO_URL`: Your MongoDB database URL.

Create a `.env` file in the project root and add these variables.

```env
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_PRESET_NAME=your_preset_name
CLOUDINARY_CLOUD_NAME=your_cloud_name
MONGO_URL=your_mongodb_url
```

## Deployment

To deploy Srcing, ensure you have configured the required environment variables. Then, run:

```bash
npm run build
npm start
```

Your application will be accessible at `http://localhost:3000` by default.

## Contributing

Feel free to contribute to Srcing by following these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE.md).
