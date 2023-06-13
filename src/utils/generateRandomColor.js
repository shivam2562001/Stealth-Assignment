function randHex() {
    return (Math.floor(Math.random() * 56) + 200).toString(16);
}

export default function generateRandomColor() {
    return "#" + randHex() + "" + randHex() + "" + randHex();
}
