import { RegisterFrom } from "@/components/auth/RegisterFrom";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ByteSpace — Create an account",
  description:
    "Create your free ByteSpace account and start learning or teaching today.",
};

export default function RegisterPage() {
  return <RegisterFrom />;
}
