import { quoteRequest } from "../request";

export function getRandomQuote() {
  return quoteRequest.get({
    url: "/random",
  });
}
