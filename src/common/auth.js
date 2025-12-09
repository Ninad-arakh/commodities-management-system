// auth.js for session management
export function getSession() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = JSON.parse(atob(token));

    if (decoded.exp < Date.now()) {
      localStorage.clear();
      return null;
    }

    return decoded;
  } catch (e) {
    return null;
  }
}
