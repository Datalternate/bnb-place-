// Sample bookings
const bookings = JSON.parse(localStorage.getItem("bookings")) || [
  {
    name: "Jane Doe",
    email: "jane@example.com",
    checkin: "2025-11-10",
    checkout: "2025-11-15",
    listing: "Ocean View"
  }
];

// Render bookings
const tableBody = document.querySelector("#bookingsTable tbody");
bookings.forEach((b, i) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${b.name}</td>
    <td>${b.email}</td>
    <td>${b.checkin}</td>
    <td>${b.checkout}</td>
    <td>${b.listing}</td>
    <td><button onclick="deleteBooking(${i})">Delete</button></td>
  `;
  tableBody.appendChild(row);
});

function deleteBooking(index) {
  bookings.splice(index, 1);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  location.reload();
}

// Listing form logic
document.getElementById("listingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const listing = {
    id: form.id.value || `bnb${Date.now()}`,
    name: form.name.value,
    location: form.location.value,
    price: form.price.value
  };
  alert(`Listing "${listing.name}" saved! (Backend-ready format)`);
});
