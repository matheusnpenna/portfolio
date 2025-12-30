import {
  doc,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  collection
} from "firebase/firestore";


export const useProjectsApi = () => {
  const { $firestore } = useNuxtApp()
  const COLLECTION = "projects";

  const getProjects = async () => {
    return new Promise((resolve, reject) => {
      return getDocs(collection($firestore, COLLECTION))
      .then(snapshot => {
        const projects = snapshot.docs.map(d => ({ ...d.data(), id: d.id }));
        resolve(projects);
      })
      .catch(e => {
        reject(e)
      })
    });
  }

  return {
    getProjects
  }
}
