import "server-only";

export const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN");
}

console.log("Sanity Read Token:", token); // Just to verify if the token is correctly set
