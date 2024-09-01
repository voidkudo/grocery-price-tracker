import { JwtPayload } from "jwt-decode";

interface GoogleOAuthCredentail extends JwtPayload {
  email?: string,
  email_verified?: boolean,
  name?: string,
  picture?: string,
  given_name?: string,
  family_name?: string,
}