function initMap() {
    const { Map } = google.maps;
    const { AdvancedMarkerElement } = google.maps;

    const map = new Map(document.getElementById("map"), {
        center: { lat: 37.42, lng: -122.1 },
        zoom: 14,
        mapId: "4504f8b37365c3d0",
    });

    const priceTag = document.createElement("div");
    priceTag.className = "price-tag";
    priceTag.textContent = "$2.5M";

    const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 37.42, lng: -122.1 },
        content: priceTag,
    });
}
