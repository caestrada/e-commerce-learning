import { getColorByIdSSR } from "@/lib/db/color.server";
import { ColorForm } from "./components/color-form";

const ColorPage = async ({ params }: { params: { colorId: string; accountId: string } }) => {
  const color = await getColorByIdSSR(params.colorId);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};

export default ColorPage;
