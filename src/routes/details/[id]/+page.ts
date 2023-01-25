import type { Content } from "../../../types/Content";
import { content } from "../../../data/content";

export async function load({ params }) {
    const { id } = params;
    if (!content[id]) {
        throw error(404, `Content with id -> ${id} not found`);
    }

    const item = content[id];

    return {
        item: item,
    };
}