const BASE_URL = "https://home-crafters-mikatsyed.vercel.app/api/v1"
export async function getAllBlog() {
    const res = await fetch(`${BASE_URL}/blogs`, { next: { tags: ['blogs'] } });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}