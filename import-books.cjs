const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');

const serviceAccount = require('./firebase-key.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const books = JSON.parse(
  fs.readFileSync('./books.json', 'utf8')
);

async function importBooks() {
  console.log(`Found ${books.length} books`);

  // Видаляємо тестовий документ, який ми створили вручну
  await db.collection('books').doc('test').delete();

  // Firestore batch має обмеження 500 операцій
  const batchSize = 500;

  for (let i = 0; i < books.length; i += batchSize) {
    const batch = db.batch();

    const chunk = books.slice(i, i + batchSize);

    chunk.forEach((book, index) => {
      const id = String(i + index + 1);

      const docRef = db.collection('books').doc(id);

      batch.set(docRef, book);
    });

    await batch.commit();

    console.log(
      `Imported ${Math.min(i + batchSize, books.length)} / ${books.length}`
    );
  }

  console.log('✅ Import completed!');
}

importBooks().catch(error => {
  console.error('❌ Import failed:', error);
});
