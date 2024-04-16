import ListV1 from "@/app/(listing)/(list-view)/oferty/page";

export async function generateMetadata({ params }) {
  return {
    title: "...",
  };
}

export default function RedirectToMain({ params }) {
  return (
    <ListV1
      params={{
        sellType: params.rentType?.toUpperCase(),
        type: params.type?.toUpperCase(),
      }}
    />
  );
}
