
import { base } from '$app/paths';

export function getImageUrl(name) {
    return new URL(`${base}/${name}`, import.meta.url).href
}