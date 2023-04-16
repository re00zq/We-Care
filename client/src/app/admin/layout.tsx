import Footer from "@Components/app/Footer";
import Header from "@Components/app/Header";
import DoctorWraper from "./AdminWraper";

export const metadata = {
  title: "Doctor Dashboard",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DoctorWraper>
      {children}
    </DoctorWraper>
  );
}
