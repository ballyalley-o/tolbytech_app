import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@tolbytech.co.nz',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Tolby Tech Guy',
    email: 'tolbytechguy@tolbytech.co.nz',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Walter White',
    email: 'wwhite@bluemagic.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Jesse Pinkman',
    email: 'jpinkman@yo.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Saul Goodman',
    email: 'jimmy@bettercallsaul.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Gus Fring',
    email: 'gus@losPollosHermanos.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mike Ehrmantraut',
    email: 'justmike@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Hank Schrader',
    email: 'hank@dea.gov',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Accounts',
    email: 'accounts@tolbytech.co.nz',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users
