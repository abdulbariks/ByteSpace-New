import { LoginFrom } from "@/components/auth/LoginFrom";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ByteSpace — Sign In",
  description: "Sign in to your ByteSpace account and continue learning.",
};

export default function LoginPage() {
  return <LoginFrom />;
}
