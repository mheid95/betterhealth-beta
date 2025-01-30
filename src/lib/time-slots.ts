export function generateTimeSlots() {
  const slots: string[] = []
  const startHour = 11
  const endHour = 18

  for (let hour = startHour; hour < endHour; hour++) {
    slots.push(`${hour}:00-${hour + 1}:00`)
  }

  return slots
}

// Format time slot for display (e.g., "11:00-12:00" -> "11:00 - 12:00")
export function formatTimeSlot(time: string): string {
  // No need to modify the format as it's already in the desired form
  return time.replace('-', ' - ')
} 