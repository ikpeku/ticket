const register = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

const login = (user) => {

 
}

const authService = {
  register,
  login,
}

export default authService
