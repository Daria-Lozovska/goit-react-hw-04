export async function fetchImages(query, page = 1) {
  const ACCESS_KEY = "Gd4hAjZGY4iB_bM6T4t-GkWy6P1FguQKr-0JqonIA6k";
  const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${ACCESS_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}