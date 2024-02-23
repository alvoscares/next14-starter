// Server Actions es una alternativa mas sencilla a las rutas API. Son buenas para proyectos pequenos, pero si las llamadas a la api son mas comprejas, es mejor usar las rutas API.

// Las 'Server Actions' son una característica que permite la ejecución de código directamente en el servidor desde cualquier cliente, sin necesidad de crear un punto de API separado.

"use server";

import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt"; // lib para hashear passwords

import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";

export const addPost = async (previousState, fromData) => {
  const { title, desc, slug, userId } = Object.fromEntries(fromData);

  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();
    console.log("save to DB");
    revalidatePath("/blog"); // borra el cache de /blog por lo tanto vuelve a hacer la llamada a la api para mostrar los nuevos datos
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (fromData) => {
  const { id } = Object.fromEntries(fromData);
  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("delete from DB");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const addUser = async (previousState, fromData) => {
  const { username, email, password, img } = Object.fromEntries(fromData);

  try {
    connectToDb();
    const newUser = new User({ username, email, password, img });
    await newUser.save();
    console.log("save to DB");
    revalidatePath("/admin"); // borra el cache de /admin por lo tanto vuelve a hacer la llamada a la api para mostrar los nuevos datos
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deleteUser = async (fromData) => {
  const { id } = Object.fromEntries(fromData);
  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("delete from DB");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, fromData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(fromData);

  if (password !== passwordRepeat) {
    return { error: "Passwords don't match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    // En criptografía, una sal (en inglés: salt) es un conjunto de bits aleatorios que se usan como una de las entradas en una función derivadora de claves. La otra entrada es habitualmente una contraseña. La salida de la función derivadora de claves se almacena como la versión cifrada de la contraseña.

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("save to DB");

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const login = async (previousState, fromData) => {
  const { username, password } = Object.fromEntries(fromData);

  try {
    await signIn("credentials", {
      username,
      password,
    });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};
