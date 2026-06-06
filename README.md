# Social Media omorfos

Projek ini merupakan web social media sederhana menggunakan React + Vite dan API dari JSONplaceholder sebagai mengakses informasi mengenai user

## Penjelasan Fetch API
Pada project ini, Fetch API digunakan untuk mengambil data pengguna dari `https://jsonplaceholder.typicode.com/users`. Proses pengambilan data dilakukan di dalam `useEffect` sehingga request hanya dijalankan saat komponen pertama kali dirender. Data yang diterima dari server berupa format JSON kemudian diubah menjadi objek JavaScript dan disimpan ke dalam state menggunakan `useState`. Data tersebut selanjutnya digunakan untuk menampilkan informasi pengguna pada halaman secara dinamis.

## Penjelasan components

* **App.jsx**: Merupakan komponen utama yang bertugas mengelola state aplikasi, mengambil data dari API menggunakan Fetch API, serta meneruskan data dan fungsi yang diperlukan ke komponen lainnya melalui props.
* **Navbar.jsx**: Komponen navigasi yang digunakan untuk berpindah antar halaman dalam aplikasi, termasuk menuju halaman informasi detail pengguna.
* **Post.jsx**: Komponen yang menampilkan daftar pengguna dari API, menyediakan fitur pencarian, serta memungkinkan pengguna memberikan Like dan Follow pada setiap user.
* **User.jsx**: Komponen yang menampilkan informasi lanjutan setiap pengguna, seperti nama, username, kota asal, dan perusahaan berdasarkan data dari API.
* **Footer.jsx**: Komponen yang menampilkan informasi hak cipta (copyright) dan identitas pembuat aplikasi pada bagian bawah halaman.

```bash
App.jsx
│
├── Navigatorbar
│
├── PostingPage
│      │
│      └── Post.jsx
├── UserPage
│      │
│      └── User.jsx
│
└── Footer
```

## Implementasi React Hooks

### 1. useState
Digunakan untuk menyimpan dan mengelola data yang dapat berubah, seperti data pengguna, nilai pencarian, serta status Like dan Follow.

```jsx
  // mengambil data user
  const [users, setUsers] = useState([])
  // system loading dan system error
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  // Tombol Interaksi Like Dan Follow
  const [btnLiked, setBtnLiked] = useState([])
  const [btnFollowed, setBtnFollowed] = useState([])
```

### 2. useEffect
Digunakan untuk menjalankan proses pengambilan data dari API saat komponen pertama kali ditampilkan.

```jsx
useEffect(() => {
    async function penyambunganUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json() 
        if (!response.ok) {
          throw new Error("gagal mengambil data")
        }
        setUsers(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    penyambunganUsers()
  }, [])
```

### 3. useContext
Digunakan untuk membagikan data dan fungsi ke berbagai komponen tanpa perlu mengirim props secara berulang.

```jsx
import { createContext } from "react";

const UserContext = createContext();
export default UserContext
```

### 4. useRef
Digunakan untuk mengakses elemen input secara langsung, seperti memberikan fokus (focus) ke kolom pencarian ketika tombol ditekan.

```jsx
  const inputRef = useRef("")
              <input
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari orangnya"/>
```

