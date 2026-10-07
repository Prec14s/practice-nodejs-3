# Practice Node.js 3 - Built-in Modules

Repositori ini berisi latihan dan contoh penggunaan **Node.js Built-in Modules** (Modul Bawaan Node.js) sebagai bagian dari pembelajaran Backend Node.js di MySkill.

---

## 📁 Struktur Folder & Berkas

```text
be-nodejs3-myskill/
│
└── 3.builtin-module/
    ├── 1_file_example_module.js    # Pengolahan file dengan modul 'fs'
    ├── 2_net_module_client.js      # TCP Client dengan modul 'net'
    ├── 2_net_module_server.js      # TCP Server dengan modul 'net'
    ├── 3_os_module.js              # Informasi sistem operasi dengan modul 'os'
    ├── 4_path_module.js            # Penanganan path direktori/file dengan modul 'path'
    ├── 5_url_module.js            # Parsing URL dengan modul 'url'
    ├── 6_http_module.js           # HTTP Server dasar dengan modul 'http'
    ├── 7_assert_module.js         # Unit testing/assertion dengan modul 'assert'
    ├── 8_performance_module.js    # Pengukuran performa eksekusi dengan modul 'perf_hooks'
    ├── 9_crypto_module.js         # Kriptografi & hashing HMAC SHA-256 dengan modul 'crypto'
    ├── 10_buffer_module.js        # Pengolahan biner (Hex & Base64) dengan modul 'buffer'
    ├── 11_zlib_module.js          # Kompresi file Gzip dengan modul 'zlib'
    ├── 12_util_module.js          # Promisify & string formatting dengan modul 'util'
    ├── example.txt                # Berkas teks contoh untuk latihan I/O & zlib
    └── example.zip                # Berkas kompresi Gzip hasil latihan zlib
```

---

## 📝 Penjelasan Detail Berkas

### 1. `1_file_example_module.js` (`fs` - File System)
Digunakan untuk melakukan operasi membaca (`readFile`) dan menulis/memperbarui (`writeFile`) konten pada berkas teks (`example.txt`).

### 2. `2_net_module_server.js` & `2_net_module_client.js` (`net` - Network TCP)
* **`2_net_module_server.js`**: Membuat HTTP/TCP Server sederhana yang mendengarkan pada port `3000`, menyapa client yang terhubung, dan menerima aliran data dari client.
* **`2_net_module_client.js`**: Membuat TCP Client yang terhubung ke server `localhost:3000` dan mengirimkan data/pesan string.

### 3. `3_os_module.js` (`os` - Operating System)
Mengambil informasi perangkat keras dan sistem operasi host, seperti spesifikasi CPU (`os.cpus()`), sisa memori (`os.freemem()`), total memori (`os.totalmem()`), platform OS (`os.platform()`), dan tipe OS (`os.type()`).

### 4. `4_path_module.js` (`path`)
Menyediakan utilitas untuk bekerja dengan jalur berkas dan direktori, seperti menggabungkan path (`path.join`), mengambil direktori induk (`path.dirname`), nama berkas (`path.basename`), dan ekstensi berkas (`path.extname`).

### 5. `5_url_module.js` (`url`)
Digunakan untuk mengurai (parse) string URL menjadi objek JavaScript untuk mengakses komponen seperti `host`, `pathname`, `search`, dan `hash`.

### 6. `6_http_module.js` (`http`)
Membuat Web Server HTTP sederhana pada port `3000` yang merespons setiap permintaan dengan status HTTP 200 dan teks `Hello from the server!`.

### 7. `7_assert_module.js` (`assert`)
Digunakan untuk pengujian invariant/assertion dalam kode, meliputi kesamaan langsung (`assert.strictEqual`), evaluasi boolean (`assert.ok`), dan evaluasi kesamaan mendalam pada objek (`assert.deepStrictEqual`).

### 8. `8_performance_module.js` (`perf_hooks`)
Menggunakan `PerformanceObserver` dan fungsi `performance.mark()` / `performance.measure()` untuk mengukur durasi dan performa eksekusi suatu fungsi JavaScript.

### 9. `9_crypto_module.js` (`crypto`)
Mengimplementasikan fungsi kriptografi untuk membuat hash rahasia menggunakan algoritma HMAC-SHA256.

### 10. `10_buffer_module.js` (`buffer`)
Mengolah dan memanipulasi data biner mentah dalam memori, serta mengubahnya ke format encoding seperti `hex` dan `base64`.

### 11. `11_zlib_module.js` (`zlib`)
Melakukan kompresi file teks (`example.txt`) menggunakan metode Gzip (`zlib.gzipSync`) dan menyimpannya menjadi berkas biner `.zip` (`example.zip`).

### 12. `12_util_module.js` (`util`)
Menggunakan utilitas bawaan Node.js untuk merubah fungsi berbasis callback menjadi Promise (`util.promisify`) serta melakukan format string (`util.format`).

---

## 🚀 Cara Menjalankan Berkas

Jalankan berkas JavaScript yang diinginkan menggunakan perintah `node`:

```bash
node 3.builtin-module/1_file_example_module.js
node 3.builtin-module/3_os_module.js
node 3.builtin-module/6_http_module.js
```
