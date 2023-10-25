# Next.js Restaurant Application


 You can see the website [here](https://restaurant-nextjs-tailwind.vercel.app)

To run the application

1. Clone this repo
2. Run `npm install`
3. Run `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser


## Built With

* HTML
* Tailwind CSS
* Javascript
* Next.js
* Typescript
* PostgreSQL
* Prisma
* NextAuth.js
* Google Cloud as auth provider
* TanStack React Query
* Zustand state management
* Stripe payment


<br />

## Environmental Variables

Create .env in the root directory and add the following

### NEXTAUTH_SECRET

Used to encrypt the NextAuth.js JWT, and to hash email verification tokens. This is the default value for the secret option in NextAuth and Middleware.

For more information
* [Auth.js OAuth authentication - Configuring Auth.js](https://authjs.dev/getting-started/oauth-tutorial#1-configuring-authjs)
* [NEXTAUTH_SECRET](https://next-auth.js.org/configuration/options#nextauth_secret)

`NEXTAUTH_SECRET="This is an example"`
<br />


### Google Cloud Auth

Add the Client ID `GOOGLE_ID` and Client secret `GOOGLE_SECRET` from Google cloud Credentials in APIs & Services (OAuth 2.0 Client IDs) 


for more information:

* [Next Auth.js Google Provider](https://next-auth.js.org/providers/google)
* [Google Cloud APIs Credentials](https://console.developers.google.com/apis/credentials)
* [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2)

Also you need to add your server URI in Authorized JavaScript origins (for example http://localhost:3000) and Authorized redirect URIs  (for example http://localhost:3000/api/auth/callback/google) 
<br />



### Nextjs Server URL

`NEXT_PUBLIC_SERVER_URL`

### PstgreSQL Databse URL

`DATABASE_URL`


### Stripe
`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

`STRIPE_SECRET_KEY`


## Deployment

Next.js app is Deployed on [Vercel](https://vercel.com/)

PostgreSQL DB is deployed on [Render](https://render.com)

You can see the website [here](https://restaurant-nextjs-tailwind.vercel.app)


<br />

## Authors

- **Ali Darraji** - [https://github.com/adarraji](https://github.com/adarraji)

<br />

## Deploy status
![Vercel](https://restaurant-nextjs-tailwind.vercel.app/?app=restaurant-nextjs-tailwind)


## Screenshots
<br />

![Image 1](public/images/image-01.png)
<br />
<br />

![Image 2](public/images/image-02.png)
<br />
<br />

![Image 3](public/images/image-03.png)
<br />
<br />

![Image 4](public/images/image-04.png)
<br />
<br />

![Image 5](public/images/image-05.png)
<br />
<br />

![Image 6](public/images/image-06.png)
<br />
<br />

![Image 7](public/images/image-07.png)
<br />
<br />

<br />
<br />
<br />
