import { menu } from "@/app/data/data";

export async function GET(
    _request: Request,
    { params }: { params: { id: string } }
) {

    const data = menu.find(
        (item: { id: number }) => item.id.toString() === params.id
    );

    return Response.json(data);

}