import { LoginFrom } from "@/components/auth/LoginFrom";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ByteSpace — Sign In",
};

export default function LoginPage() {
  return <LoginFrom />;
}
