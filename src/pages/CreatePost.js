import "./CreatePost.css";
import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore"; // pour ajouter un document a ma table sur firestore
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts"); //cest la reference a la collection que j'ai créé sur firestore
  let navigate = useNavigate();
  // fonction  qui quand on click sa submit data to firestore et stock
  // on a tjr besoin des fonctions async pour rester a jours sur les datas de firebase
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      //verifier si on est auth
      navigate("/login"); // si on est pas auth on est redirect sur login page
    }
  });

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Xx create a post xX</h1>
        <div className="inputGroup">
          <label> Tittle:</label>
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            placeholder="title....."
          />
        </div>
        <div className="inputGroup">
          <label> Post:</label>
          <textarea
            placeholder="post....."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Submit post!!!</button>
      </div>
    </div>
  );
}

export default CreatePost;
