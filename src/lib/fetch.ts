const BASE_URL = "https://home-crafters-mikatsyed.vercel.app/api/v1"
export async function getAllBlog() {
    const res = await fetch(`${BASE_URL}/blogs`, { next: { tags: ['blogs'] } });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}
export async function getAllService() {
    const res = await fetch(`${BASE_URL}/services`, { next: { tags: ['services'] } });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}
export async function getAllCategories() {
    const res = await fetch(`${BASE_URL}/categories`, { next: { tags: ['categories'] } });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}
export async function getAllFaqs() {
    const res = await fetch(`${BASE_URL}/faqs`, { next: { tags: ['faqs'] } });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}
export async function getAllReviews() {
    const res = await fetch(`${BASE_URL}/review`, { next: { tags: ['reviews'] } });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}