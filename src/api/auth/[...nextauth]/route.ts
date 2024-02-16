import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export const { handlers, auth } = NextAuth((req) => {
  if (req) {
    console.log(req);
  }
  return { providers: [Github] };
});
