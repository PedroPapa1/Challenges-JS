import promptSync from "prompt-sync";
const prompt = promptSync();

export function checkOut(hotels, reservations) {
  console.log("\nInsert the reserve id to check out.");
  const reservationId = parseInt(prompt(">"));
  const foundReservation = reservations.find((reservation) => reservation.reservationId === reservationId);

  if (!foundReservation || !foundReservation.checkOut()) {
    console.log(`FAILED! Reservation id: [${reservationId}] could not be check out.`);
    return;
  }

  const findingHotel = hotels.find((hotel) => hotel.id === foundReservation.reservationId);
  if (!findingHotel) {
    console.log(`FAILED! Hotel could not be find.`);
    return;
  }

  console.log(`- Check out reservation id: [${reservationId}] successful`);
}
