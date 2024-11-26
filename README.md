# Product Listing Application

This project is a simple product listing application built with [Remix](https://remix.run/) and [Material UI](https://mui.com/). It provides users with a horizontal scrolling list and a paginated vertical list of products, with the ability to view detailed information about each product. The app is designed to fetch data from APIs dynamically.

## Features

- **Horizontal Product List**: A scrollable list showcasing featured products.
- **Vertical Product List**: A paginated list of products loaded dynamically from an API.
- **Product Details Page**: Displays detailed information about a selected product.
- **Material UI Integration**: Leverages Material UI components for styling and layout.
- **Dynamic API Integration**: Fetches data from APIs to display products and their details.

## Technologies Used

- **Remix**: For building the front-end.
- **TypeScript**: For type-safe development.
- **Material UI**: For pre-built UI components and customization.

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/OldPlanet/product-list   
   cd product-list
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Folder Structure

- **components**: Contains React components such as `HorizontalList`, `VerticalList`, `ProductCard`, and `ProductDetailCard`.
- **routes**: Includes route files like `index.tsx` and `product.$productId.tsx` to handle different pages of the application.
- **utils**: Utility types and functions used throughout the application.

## API Endpoints

The application fetches data from the following mock API endpoints:

- **Product List**: `https://mock.akakce.dev/page.json`
- **Product Details**: `https://mock.akakce.dev/product/:productId.json`

## How It Works

1. The homepage (`index.tsx`) displays a **HorizontalList** of featured products and a **VerticalList** with pagination.
2. Clicking a product in either list navigates to the **Product Details Page** (`product.$productId.tsx`), showing detailed information about the selected product.
3. The **HorizontalList** component uses drag-and-scroll functionality for seamless navigation.
4. The **VerticalList** component pre-fetches paginated URLs and dynamically fetches product lists as the user navigates.

## Preview of the project
### Home Page
![image](https://github.com/user-attachments/assets/0b81d7ab-9c0d-4a9b-83c2-7205014553f4)

### Product Detail Page
![image](https://github.com/user-attachments/assets/f3e73b70-49f5-4fc5-8758-b282be8a568a)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
