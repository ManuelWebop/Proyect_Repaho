// userUtils.js
import User from '../models/User' // Importa tu modelo de usuario si lo tienes

export async function updateUserProfileImage(userId, profileimage) {
  try {
    // Busca al usuario por ID en la base de datos
    const user = await User.findById(userId)

    if (!user) {
      throw new Error('Usuario no encontrado')
    }

    // Actualiza el campo de imagen de perfil del usuario con la nueva URL
    user.image = profileimage
    await user.save()

    return true
  } catch (error) {
    console.error('Error al actualizar la imagen de perfil:', error)
    return false
  }
}
