#Umbrella

## Background & Overview

Umbrella is a mobile application that facilitates communication between parents and teachers.

In the modern day and age, parents face the increasingly difficult challenge of balancing work with personal life. Our vision is to create a service which helps busy parents keep track of their children's everyday activities as well as offer teachers a platform to express their creativity. In doing so, we hope to employ cutting-edge technologies in mobile development in order to make education an exciting and memorable adventure.

Umbrella consists of 4 key components that work together to securely connect parents and teachers.

* Moments
* User profile
* Parent and Teacher functionality
* Google Authentication

## Moments

The key feature of Umbrella is the Moments component. Moments allow parents to keep up to date with their children's activities

**Teacher Functionality**

Using moments, teachers can post live updates about their class, which parents can see immediately. Teachers can assign moments to particular children in their class and selectively notify only the parents of those children.

INSERT GIF HERE

**Dynamic Loading**

Umbrella offers fast and responsive rendering by loading only the moments that it needs.

INSERT GIF HERE



## Google Authentication

The privacy and security of our users is of utmost importance to us. That's why we protect our users with a two-part authentication process using Google OAuth2 and JSON Web Tokens.

Users can sign in to Umbrella using their Google+ account by tapping the "Sign in with Google" button.

IMAGE OF GOOGLE BUTTON

It's easy, simple, and secure. Umbrella will never have access to the user's Google account. Instead, Google will verify the user's credentials and tell Umbrella to log you in.

**Google OAuth2**

OAuth is handled at the Rail backend using the Omniauth gem. Upon successful authentication, Google passes the server an `oauth_token`, which is saved to the user, and also passed back to Umbrella in the redirect URL.

**JSON Web Token Authentication**

Because the `oauth_token` in the URL carries the risk of being intercepted, it is not used to validate the user's session. Instead, Umbrella immediately submits it to the server to request a JSON Web Token, or JWT, delivered securely via HTTPS. The JWT is generated by encoding the user's `oauth_token` into the payload in order to create a JWT unique to that session.
```
def fetch_jwt
  oauth_token = request.headers['oauth_token']
  user = User.find_by(oauth_token: oauth_token)

  if user
    render json: ["You may only sign in from one device at a time."] if user.logged_in
    auth_token = JsonWebToken.encode({oauth_token: oauth_token})
    render json: {auth_token: auth_token}, status: :ok
  else
    render json: ["Session expired. Log in again."]
  end
end
```
Now when the user makes any request, they must send a JWT to be decoded and validated. Because only the server knows the `secret_key` it uses for encoding, only it can decode and encode its JWTs, ensuring that the payload cannot be read or tampered with. Furthermore, the JWT can only be fetched once per session. This ensures that even if a `oauth_token` is captured, only the intended user can log in to that session. Upon logout, the user's `oauth_token` is destroyed, and will be replaced by a new token given by Google on the next sign in. This invalidates the JWT for that session for further security.
To learn more about the JSON Web Token, visit https://jwt.io/introduction/
