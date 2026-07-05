import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function random<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function percentage(current: number, total: number) {
  return Math.round((current / total) * 100);
}

export function shuffle<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

export function formatTime(hour: number) {
  return `${hour.toString().padStart(2, "0")}h00`;
}