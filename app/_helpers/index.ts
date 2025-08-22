export function totalPages(total: number, limit: number): number {
  return Math.ceil(total / limit);
}

export function pageRange(currentPage: number, limit: number): string {
  const end = limit * currentPage;
  const start = end - limit + 1;
  return `${start}-${end}`;
}

export const urlRegex =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
