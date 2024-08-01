import { db } from './firebase-config'; // adjust the path as necessary

export const addItem = async (item) => {
  try {
    const docRef = await db.collection('pantryItems').add(item);
    return docRef.id; // returns the new document's ID
  } catch (error) {
    throw new Error("Error adding item: " + error.message);
  }
};

export const fetchItems = async () => {
  try {
    const snapshot = await db.collection('pantryItems').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error("Error fetching items: " + error.message);
  }
};

export const updateItem = async (id, item) => {
  try {
    await db.collection('pantryItems').doc(id).update(item);
  } catch (error) {
    throw new Error("Error updating item: " + error.message);
  }
};

export const deleteItem = async (id) => {
  try {
    await db.collection('pantryItems').doc(id).delete();
  } catch (error) {
    throw new Error("Error deleting item: " + error.message);
  }
};
