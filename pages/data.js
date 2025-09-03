let users = [];

export function addUser(user) {
  if (users.find(u => u.email === user.email)) {
    addUser.exists = (email) => true;
    return false;
  }
  user.id = Math.random().toString(36).substr(2, 8);
  users.push(user);
  addUser.exists = (email) => !!users.find(u => u.email === email);
  return true;
}
addUser.exists = (email) => !!users.find(u => u.email === email);

export function getUsers() {
  return users;
}

export function getUserByEmail(email) {
  return users.find(u => u.email === email);
}

export function checkLogin(email, password) {
  const user = users.find(u => u.email === email && u.passwort === password);
  return user || null;
}
