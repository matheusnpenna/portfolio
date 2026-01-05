import {
  doc,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  collection
} from 'firebase/firestore'
import type { TProject } from '~/types'

export const useProjectsApi = () => {
  const { $firestore } = useNuxtApp()
  const COLLECTION = 'projects'

  async function getProjects(): Promise<TProject[]> {
    return new Promise((resolve, reject) => {
      return getDocs(collection($firestore, COLLECTION))
        .then((snapshot) => {
          const projects = snapshot.docs.map(d => ({ ...d.data(), id: d.id }))
          resolve(projects as TProject[])
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  return {
    getProjects
  }
}
