export function getTokenFromRequest(request: Request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader) {
    return null;
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return null;
  }

  return token;
}
