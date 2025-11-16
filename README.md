# PrismAI 🚀

**Live Demo**: []()

PrismAI is a powerful AI-powered platform designed to transform your content creation process. With a suite of premium AI tools, it helps you write engaging articles, generate stunning images, and streamline your workflow—all in one place.

---

## 🚀 Features

- **AI Article Writer** - Generate high-quality, SEO-friendly articles on any topic
- **Blog Title Generator** - Create catchy and relevant blog titles using keywords
- **AI Image Generator** - Generate realistic images, Ghibli-style, anime-style, and 3D renderings
- **Background & Object Removal** - Remove unwanted backgrounds or objects from images
- **Resume Review** - Get AI-powered analysis and suggestions for improvement
- **User Dashboard** - Track creations, manage plans, and access tools

---

## 💻 Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (Neon)
- **Authentication**: Clerk
- **AI Integration**: ClipDrop AI, Gemini AI
- **Image Storage**: Cloudinary
- **Hosting**: Vercel

---

## 📋 Prerequisites

Before running this project locally, make sure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** - [Download here](https://git-scm.com/)

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/PrismAI.git
cd PrismAI
```

### 2. Install Dependencies

**Install Frontend Dependencies:**

```bash
cd quickai-client
npm install
```

**Install Backend Dependencies:**

```bash
cd ../quickai-server
npm install
```

### 3. Environment Configuration

#### Frontend Environment (.env file in `quickai-client` folder)

Create a `.env` file in the `quickai-client` directory:

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here

# API Base URL
VITE_API_BASE_URL=http://localhost:3000
```

#### Backend Environment (.env file in `quickai-server` folder)

Create a `.env` file in the `quickai-server` directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key_here

# Database Configuration (Neon PostgreSQL)
DATABASE_URL=postgresql://username:password@your-neon-endpoint/database_name

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# AI APIs
CLIPDROP_API_KEY=your_clipdrop_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:5174
```

### 4. Required API Keys & Services Setup

#### **Clerk Authentication** (Required)

1. Visit [Clerk.dev](https://clerk.dev) and create an account
2. Create a new application
3. Get your `CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
4. Configure your authentication settings

#### **Neon Database** (Required)

1. Visit [Neon.tech](https://neon.tech) and create an account
2. Create a new PostgreSQL database
3. Get your `DATABASE_URL` connection string

#### **Cloudinary** (Required for image features)

1. Visit [Cloudinary.com](https://cloudinary.com) and create an account
2. Get your `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`

#### **ClipDrop AI** (Required for image generation)

1. Visit [ClipDrop AI](https://clipdrop.co/apis) and create an account
2. Get your `CLIPDROP_API_KEY`

#### **Gemini AI** (Required for text generation)

1. Visit [Google AI Studio](https://aistudio.google.com) and create an account
2. Get your `GEMINI_API_KEY`

### 5. Database Setup

After setting up your Neon database, run any necessary migrations or database setup scripts if available.

---

## 🚀 Running the Application

### Development Mode

**Start the Backend Server:**

```bash
cd quickai-server
npm run server
# or
npm start
```

The backend will run on `http://localhost:3000`

**Start the Frontend Development Server:**

```bash
cd quickai-client
npm run dev
```

The frontend will run on `http://localhost:5173`

### Production Build

**Build Frontend for Production:**

```bash
cd quickai-client
npm run build
```

**Start Production Server:**

```bash
cd quickai-server
npm start
```

---

## 📁 Project Structure

```
PrismAI/
├── quickai-client/          # React.js Frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Images, icons, etc.
│   │   └── App.jsx         # Main app component
│   ├── public/             # Static files
│   └── package.json        # Frontend dependencies
│
├── quickai-server/          # Node.js Backend
│   ├── config/             # Database and service configs
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── routes/            # API routes
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
│
└── README.md              # Project documentation
```

---

## 🔧 Troubleshooting

### Common Issues

**1. Port Already in Use**

```bash
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 5173
npx kill-port 5173
```

**2. Environment Variables Not Loading**

- Ensure `.env` files are in the correct directories
- Restart the development servers after adding new environment variables
- Check that environment variable names match exactly

**3. Database Connection Issues**

- Verify your Neon database URL is correct
- Ensure your database is running and accessible
- Check firewall and network settings

**4. API Key Errors**

- Verify all API keys are valid and not expired
- Check API key permissions and usage limits
- Ensure API keys are correctly formatted in .env files

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

© 2025 PrismAI. All rights reserved.

---

## 🔗 Links & Contact

- 🌐 **Live Demo**: []()
- 🐙 **GitHub Repository**: [https://github.com/gopalpayghan/PrismAI]([https://github.com/YOUR_USERNAME/PrismAI](https://github.com/gopalpayghan/PrismAI.git))
- 📧 **Contact**: [gopaldadapayghan@gmail.com](mailto:gopaldadapayghan@gmail.com)
- 💼 **LinkedIn**: [Gopal Payghan](https://www.linkedin.com/in/gopalpayghan/)

---

## ⭐ Support

If you find this project helpful, please give it a ⭐ on GitHub!
