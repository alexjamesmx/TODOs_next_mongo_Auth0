# ✅❌ Todo app based on Next.js 12 with MongoDB and Mongoose

🎯 A basic Todo app showing implementation of CRUD operations based on MongoDB and Mongoose with Next.js. This app inspired by [Next.js with MongoDB and Mongoose from Vercel official github](https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose)
In order to focus only on CRUD implementation and functionality, the initial commit released with the minimal css and styles. You can add css as you wish and turn this app to advanced level app. It's only a simple educational example, which can be a template to develop more advanced serverless apps powered by Next.js v12 .

## Author
⚡[Hamettio](https://github.com/hamettio)

## Configuration

### Step 1. Get the connection string of your MongoDB server

In the case of MongoDB Atlas, it should be a string like this:

```
mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

For more details, follow this [MongoDB Guide](https://docs.mongodb.com/guides/server/drivers/) on how to connect to MongoDB.

### Step 2. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `MONGODB_URI` should be the MongoDB connection string you got from step 1.

### Step 3. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```