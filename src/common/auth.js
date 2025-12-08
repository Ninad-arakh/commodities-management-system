// auth.js
export function getSession() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = JSON.parse(atob(token));
    console.log("decoded : ", decoded)

    if (decoded.exp < Date.now()) {
      localStorage.clear();
      return null;
    }

    return decoded;
  } catch (e) {
    return null;
  }
}
