import * as bcrypt from 'bcrypt'

async function encodePassword(rawPassword:string) {
    const SALT = bcrypt.genSaltSync()
    return bcrypt.hashSync(rawPassword, SALT)
}

export default encodePassword