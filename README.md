# Next.js Restaurant Application

To run the application

1. Clone this repo
2. Run `npm install`
3. Run `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser


## Built With

* HTML
* CSS
* Javascript
* Next.js
* Typescript
* PostgreSQL
* Docker for PostgreSQL
* NextAuth.js
* Google Cloud as auth provider
* Prisma
* TanStack React Query
* React Toastify


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



### DB

DATABASE_URL
POSTGRES_USER
POSTGRES_PASSWORD
POSTGRES_DB

<br />

## Authors

- **Ali Darraji** - [https://github.com/adarraji](https://github.com/adarraji)

<br />
