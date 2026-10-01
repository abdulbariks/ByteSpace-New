import { RegisterFrom } from "@/components/auth/RegisterFrom";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ByteSpace — Create an account",
};

export default function RegisterPage() {
  return <RegisterFrom />;
}
