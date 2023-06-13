

export default async function fetchData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
} 