# Food Ordering Frontend

This is the frontend for the Food Ordering application, providing a user-friendly interface for browsing restaurants, ordering food, making payments, and tracking orders.

## Features
- User Authentication (JWT-based login/signup)
- Browse Restaurants and Menus
- Add to Cart & Checkout
- Order Tracking
- 
- Responsive Design

## Tech Stack
- **Frontend**: React.js, Vite
- **State Management**: Redux Toolkit
- **UI Framework**: Tailwind CSS
- **Routing**: React Router
- **Payments**: Stripe / Razorpay
- 

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/food-ordering-frontend.git
   cd food-ordering-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following environment variables:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure
```
food-ordering-frontend/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── redux/           # Redux store & slices
│   ├── services/        # API services
│   ├── styles/          # Global styles
│   ├── Approutes.tsx          # Main app component
│   ├── main.jsx         # Entry point
├── public/              # Static assets
├── .env                 # Environment variables
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
```

## Available Scripts
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build

## Contributing
Contributions are welcome! Feel free to submit a pull request.

## License
This project is licensed under the MIT License.

