import Card from "@/components/card";

export default function Home() {
  return (
    <>
    <div className="p-8 flex gap-4 ">
    <Card cardHeading={"Income tax e-filing"} cardDetails={"Upload your cocuments and get one click solution for income tax filing 2024"} />
    <Card cardHeading={"GST e-filing"} cardDetails={"Upload your invoice and get filed pdf in youe hand"} />
    </div>
    </>
  );
}
