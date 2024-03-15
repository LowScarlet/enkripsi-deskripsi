// Ini mendeklarasikan bahwasannya akan menggunakan client sebagai proses
"use client"

// Mulai
import { useState } from 'react'; // Import useState hook dari React library
import { AES, enc } from 'crypto-js'; // Import AES algorithm and encoding module dari crypto-js library

// Buat halaman utama
const IndexPage: React.FC = () => {
  const [input, setInput] = useState<string>(''); // Siapkan tempat untuk input
  const [secretKey, setSecretKey] = useState<string>(''); // Siapkan tempat untuk secret key
  const [result, setResult] = useState<string>(''); // Siapkan tempat untuk hasil

  // Tangani perubahan pada input
  const handleChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  // Tangani perubahan pada kunci rahasia
  const handleChangeSecretKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecretKey(event.target.value);
  };

  // Proses untuk mengenkripsi
  const handleEncrypt = () => {
    const encryptedMessage = AES.encrypt(input, secretKey).toString(); // Enkripsi pesan
    setResult(encryptedMessage); // Tampilkan hasil enkripsi
  };

  // Proses untuk mendekripsi
  const handleDecrypt = () => {
    const decryptedMessage = AES.decrypt(input, secretKey).toString(enc.Utf8); // Dekripsi pesan
    setResult(decryptedMessage); // Tampilkan hasil dekripsi
  };

  // Tampilkan halaman
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Enkripsi dan Dekripsi</h1>
      <div className="mb-4">
        <label htmlFor="input" className="block mb-2">Input</label>
        <textarea id="input" value={input} onChange={handleChangeInput} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="secret-key" className="block mb-2">Secret Key</label>
        <input id="secret-key" type="text" value={secretKey} onChange={handleChangeSecretKey} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <button onClick={handleEncrypt} className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enkripsi</button>
        <button onClick={handleDecrypt} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Dekripsi</button>
      </div>
      <div>
        <label htmlFor="result" className="block mb-2">Result</label>
        <textarea id="result" value={result} disabled={true} className="w-full p-2 border rounded bg-gray-200" />
      </div>
    </div>
  );
};

// Selesai, keluarkan IndexPage
export default IndexPage;
