const lessons = [
  {
    id: "lesson1",
    title: "Apa itu data pribadi?",
    intro: "Setiap kali mendaftar akun, memesan makanan, mengirim pesan, atau menyalakan lokasi, ada informasi tentang dirimu yang mungkin diproses. Memahami apa yang disebut data pribadi adalah langkah pertama agar kamu bisa mengambil keputusan dengan sadar.",
    objectives: [
      "Menjelaskan arti data pribadi dan cara identifikasi langsung maupun tidak langsung.",
      "Membedakan data pribadi umum, spesifik, dan contoh data yang muncul saat memakai aplikasi.",
      "Menilai kapan gabungan informasi sederhana dapat menimbulkan risiko privasi."
    ],
    sections: [
      {
        title: "Pengertian dan cara mengenali data",
        paragraphs: [
          "Data pribadi adalah data tentang orang perseorangan yang teridentifikasi atau dapat diidentifikasi, baik sendiri maupun dikombinasikan dengan informasi lain, secara langsung atau tidak langsung, melalui sistem elektronik atau nonelektronik. Artinya, sebuah informasi tidak harus menyebut nama lengkap agar bisa berkaitan dengan seseorang.",
          "Contoh identifikasi langsung: nama lengkap bersama nomor identitas. Contoh tidak langsung: lokasi yang sering dikunjungi, jenis perangkat, dan waktu aktivitas jika digabungkan dapat membentuk pola yang mengarah pada seseorang."
        ],
        bullets: []
      },
      {
        title: "Jenis data pribadi",
        paragraphs: ["UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) membedakan data pribadi spesifik dan data pribadi umum. Pengelompokan ini membantu kita memahami bahwa tidak semua data memiliki tingkat sensitivitas yang sama."],
        bullets: [
          "<strong>Data pribadi spesifik:</strong> data kesehatan, biometrik, genetika, catatan kejahatan, data anak, data keuangan pribadi, dan kategori lain yang ditentukan oleh peraturan.",
          "<strong>Data pribadi umum:</strong> nama lengkap, jenis kelamin, kewarganegaraan, agama, status perkawinan, dan data yang dikombinasikan untuk mengidentifikasi seseorang.",
          "<strong>Contoh di aplikasi:</strong> nomor telepon untuk membuat akun, lokasi untuk mengantar pesanan, foto profil, riwayat pembelian, alamat IP, atau pengenal perangkat. Konteks penggunaan menentukan seberapa sensitif dampaknya."
        ]
      },
      {
        title: "Siklus data saat menggunakan aplikasi",
        paragraphs: ["Data dapat dikumpulkan saat kamu mengisi formulir atau memberikan izin, digunakan untuk menyediakan fitur, disimpan selama diperlukan, lalu dihapus atau dikelola sesuai tujuan dan ketentuan yang berlaku. Perhatikan pemberitahuan privasi: siapa yang mengelola data, tujuan pemrosesan, jenis data yang digunakan, serta cara menghubungi pengelola."]
      }
    ],
    practiceTitle: "Latihan: petakan data yang dibagikan",
    practice: "Pilih satu aplikasi yang sering kamu gunakan. Catat tiga data yang kamu masukkan atau izinkan (misalnya nomor telepon, lokasi, dan kontak). Untuk setiap data, tanyakan: fitur apa yang memerlukannya? Apakah izin bisa dibatasi? Apakah kamu nyaman jika data itu dibagikan di luar layanan?",
    takeaways: ["Data dapat mengidentifikasi secara langsung maupun melalui gabungan informasi.", "Data spesifik seperti kesehatan, biometrik, dan keuangan perlu perhatian ekstra.", "Sebelum memberikan data, cari tahu tujuan dan pihak yang mengelolanya."]
  },
  {
    id: "lesson2",
    title: "Risiko di aplikasi digital",
    intro: "Aplikasi memudahkan aktivitas, tetapi setiap layanan memiliki cara dan tujuan pemrosesan data yang berbeda. Risiko bukan berarti semua aplikasi berbahaya; risiko meningkat ketika data dikumpulkan berlebihan, akses tidak dikelola, atau kita tertipu untuk menyerahkan informasi.",
    objectives: [
      "Menjelaskan bagaimana aplikasi dapat memperoleh dan menggunakan data.",
      "Mengenali phishing, rekayasa sosial, kebocoran, pelacakan, dan oversharing.",
      "Mempraktikkan pemeriksaan dasar sebelum memasang aplikasi atau membuka pesan."
    ],
    sections: [
      {
        title: "Bagaimana aplikasi memperoleh data?",
        paragraphs: [
          "Data bisa berasal dari informasi yang kamu isi, aktivitas saat menggunakan layanan, izin perangkat (misalnya kamera atau lokasi), serta informasi teknis seperti alamat IP dan jenis perangkat. Penggunaan data dapat diperlukan untuk menjalankan fitur, keamanan, analitik, atau tujuan lain yang dijelaskan oleh layanan.",
          "Izin perangkat bukan satu-satunya sumber data. Karena itu, baca ringkasan kebijakan privasi dan pengaturan akun, bukan hanya menekan tombol “Setuju”. Cari penjelasan tentang tujuan, masa penyimpanan, pembagian kepada pihak lain, dan pilihan untuk mengelola data."
        ]
      },
      {
        title: "Ancaman dan situasi yang sering terjadi",
        paragraphs: [],
        bullets: [
          "<strong>Phishing:</strong> pesan atau situs palsu meniru bank, kurir, kampus, atau layanan digital. Tanda yang patut dicurigai antara lain tautan tidak sesuai domain resmi, ancaman pemblokiran, hadiah tak terduga, dan permintaan OTP.",
          "<strong>Rekayasa sosial:</strong> pelaku membangun rasa percaya atau panik agar korban memberikan kata sandi, kode verifikasi, uang, atau akses akun. Informasi pribadi yang tersebar dapat dipakai untuk membuat penyamaran lebih meyakinkan.",
          "<strong>Kebocoran atau akses tanpa izin:</strong> data dapat terpapar akibat insiden pada layanan atau akun yang diambil alih. Gunakan kata sandi unik agar insiden pada satu layanan tidak otomatis membuka akun lain.",
          "<strong>Pelacakan dan profil aktivitas:</strong> data lokasi, pencarian, atau interaksi dapat digunakan untuk memahami kebiasaan. Tinjau pengaturan lokasi dan personalisasi sesuai kenyamananmu.",
          "<strong>Oversharing:</strong> foto tiket, kartu identitas, layar yang menampilkan kode, atau lokasi real-time dapat mengungkap informasi yang tidak dimaksudkan untuk publik."
        ]
      },
      {
        title: "Menilai aplikasi dan pesan",
        paragraphs: ["Sebelum memasang aplikasi, periksa nama pengembang, sumber unduhan, ulasan yang masuk akal, izin yang diminta, dan informasi privasinya. Sebelum merespons pesan, berhenti sejenak: apakah kamu memang meminta pesan itu, apakah alamat pengirim dan tautannya benar, dan bisakah klaimnya diverifikasi melalui kanal resmi yang kamu cari sendiri?"]
      }
    ],
    practiceTitle: "Latihan: audit izin aplikasi",
    practice: "Buka pengaturan privasi perangkatmu lalu pilih satu aplikasi. Periksa akses lokasi, kamera, mikrofon, foto, dan kontak. Untuk setiap izin, cocokkan dengan fungsi aplikasi. Ubah akses menjadi “saat digunakan” atau cabut izin yang tidak diperlukan jika pilihan itu tersedia. Nama menu dapat berbeda di tiap perangkat.",
    takeaways: ["Permintaan mendesak, tautan asing, dan permintaan OTP adalah tanda untuk berhenti dan memeriksa.", "Izin aplikasi seharusnya relevan dengan fitur yang digunakan.", "Verifikasi pesan lewat kanal resmi yang kamu buka sendiri."]
  },
  {
    id: "lesson3",
    title: "Strategi perlindungan",
    intro: "Perlindungan yang baik menggabungkan kebiasaan, pengaturan, dan respons yang tepat. Tidak ada langkah tunggal yang menjamin keamanan sepenuhnya, tetapi pertahanan berlapis dapat mengurangi peluang akun dan data disalahgunakan.",
    objectives: [
      "Membuat akun lebih kuat dengan kata sandi unik dan verifikasi tambahan.",
      "Mengelola izin aplikasi, pembaruan, dan pengaturan berbagi.",
      "Menerapkan prinsip minimisasi data dalam aktivitas digital sehari-hari."
    ],
    sections: [
      {
        title: "Amankan akun dan perangkat",
        paragraphs: [],
        bullets: [
          "<strong>Kata sandi:</strong> gunakan kata sandi atau frasa sandi yang panjang dan berbeda untuk setiap akun. Jangan gunakan nama, tanggal lahir, atau pola mudah ditebak. Pengelola kata sandi tepercaya dapat membantu membuat dan menyimpannya.",
          "<strong>Verifikasi tambahan:</strong> aktifkan autentikasi dua faktor (2FA) atau passkey jika tersedia. Simpan kode pemulihan secara aman. Jangan pernah mengirim kode OTP kepada siapa pun, termasuk orang yang mengaku petugas.",
          "<strong>Perangkat:</strong> gunakan kunci layar, aktifkan pembaruan otomatis jika memungkinkan, dan unduh aplikasi dari sumber resmi. Perbarui sistem dan aplikasi agar perbaikan keamanan terbaru terpasang."
        ]
      },
      {
        title: "Kurangi data yang terekspos",
        paragraphs: [],
        bullets: [
          "<strong>Kelola izin:</strong> berikan hanya akses yang diperlukan. Pilih akses terbatas atau hanya saat aplikasi digunakan jika tersedia, lalu tinjau ulang secara berkala.",
          "<strong>Atur privasi:</strong> batasi siapa yang dapat melihat unggahan, profil, daftar teman, atau lokasi. Matikan berbagi lokasi real-time setelah tidak diperlukan.",
          "<strong>Minimisasi data:</strong> isi hanya kolom yang benar-benar diperlukan. Hindari mengunggah dokumen identitas atau informasi sensitif kecuali ada alasan jelas dan layanan dapat dipercaya.",
          "<strong>Jaringan dan tautan:</strong> hindari transaksi sensitif melalui jaringan publik yang tidak tepercaya. Jangan masuk lewat tautan pesan; ketik alamat layanan atau buka aplikasi resminya."
        ]
      },
      {
        title: "Berpikir sebelum membagikan",
        paragraphs: ["Sebelum mengunggah, periksa latar foto, metadata atau lokasi, nama pengguna yang terlihat, kode QR, dokumen, dan pemberitahuan di layar. Tanyakan pada diri sendiri: apakah informasi ini perlu dibagikan, kepada siapa, dan apakah saya masih nyaman jika unggahan ini tersebar lebih luas?"]
      }
    ],
    practiceTitle: "Praktik 5 menit: perkuat satu akun",
    practice: "Pilih akun penting seperti surel utama. Pastikan kata sandinya unik, aktifkan 2FA atau passkey, periksa perangkat/sesi yang masuk, simpan metode pemulihan, lalu tinjau alamat surel dan nomor pemulihan. Kerjakan melalui aplikasi atau situs resmi, bukan tautan dari pesan.",
    takeaways: ["Gunakan kata sandi unik dan autentikasi tambahan.", "Batasi izin dan data yang dibagikan sesuai kebutuhan.", "Tinjau pengaturan privasi serta sesi akun secara berkala."]
  },
  {
    id: "lesson4",
    title: "Hak & respons insiden",
    intro: "Di Indonesia, pelindungan data pribadi diatur dalam Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP). Materi ini adalah pengantar edukatif, bukan nasihat hukum; pelaksanaan hak dan kewajiban mengikuti ketentuan serta kondisi yang berlaku.",
    objectives: [
      "Mengenali contoh hak subjek data pribadi menurut UU PDP.",
      "Mengetahui langkah awal saat akun diduga diambil alih atau data terpapar.",
      "Membedakan pemberitahuan resmi dari pesan penipuan yang memanfaatkan insiden."
    ],
    sections: [
      {
        title: "Hakmu atas data pribadi",
        paragraphs: ["UU PDP mengatur hak subjek data pribadi serta kewajiban pengendali dan prosesor data. Dalam kondisi dan tata cara yang ditentukan undang-undang, hak dapat mencakup memperoleh informasi tentang identitas pihak yang memproses dan tujuan pemrosesan, mengakses serta mendapatkan salinan data, memperbaiki atau memperbarui data yang tidak akurat, dan meminta pengakhiran pemrosesan, penghapusan, atau pemusnahan data. Terdapat pula hak lain, termasuk menarik persetujuan atau mengajukan keberatan dalam keadaan tertentu."]
      },
      {
        title: "Memahami batas dan cara menggunakan hak",
        paragraphs: [
          "Hak atas data tidak selalu berarti setiap permintaan dapat dipenuhi tanpa syarat. Penerapan hak dapat bergantung pada dasar pemrosesan, tujuan, kewajiban hukum, hak pihak lain, dan ketentuan yang berlaku. Periksa kebijakan privasi untuk mengetahui kontak pengendali data serta prosedur permintaan.",
          "Saat menghubungi layanan, jelaskan data atau akun yang dimaksud dan permintaanmu secara spesifik. Gunakan kanal resmi. Jangan mengirim salinan identitas atau informasi tambahan yang tidak diperlukan hanya untuk membuat permintaan."
        ]
      },
      {
        title: "Jika terjadi dugaan insiden",
        paragraphs: [],
        bullets: [
          "<strong>Amankan akun:</strong> dari perangkat tepercaya, ubah kata sandi yang terdampak, keluarkan sesi atau perangkat yang tidak dikenal, dan aktifkan 2FA. Jika kata sandi dipakai ulang, ganti juga di akun lain.",
          "<strong>Batasi dampak:</strong> hubungi bank atau penyedia layanan melalui kanal resmi jika data pembayaran terdampak. Jangan berikan OTP, PIN, atau kata sandi kepada pihak yang menghubungimu.",
          "<strong>Simpan bukti secara aman:</strong> catat waktu, nama layanan, dan pesan yang relevan. Hindari menyebarkan tangkapan layar yang berisi data pribadi atau tautan berbahaya.",
          "<strong>Laporkan dan ikuti informasi resmi:</strong> hubungi penyedia aplikasi atau organisasi terkait. Gunakan kanal pengaduan pemerintah atau penegak hukum yang sesuai dan masih berlaku untuk jenis insidennya."
        ]
      }
    ],
    practiceTitle: "Latihan: buat rencana respons pribadi",
    practice: "Tuliskan tiga langkah yang akan kamu lakukan jika akun media sosialmu diambil alih: (1) cara menghubungi layanan dari kanal resmi, (2) akun penting yang perlu diamankan dan kata sandi yang harus diganti, serta (3) orang tepercaya yang dapat membantu. Jangan mencantumkan kata sandi atau OTP di catatan tersebut.",
    takeaways: ["Kamu memiliki hak terkait data pribadi sesuai UU PDP dan ketentuan yang berlaku.", "Gunakan prosedur dan kontak resmi saat meminta akses, koreksi, atau penghapusan data.", "Saat ada insiden, amankan akun, simpan bukti, dan jangan bagikan kode rahasia."]
  }
];

const quizQuestions = [
  {
    tag: "TAUTAN MENCURIGAKAN",
    question: "Kamu menerima pesan: “Akunmu akan diblokir! Verifikasi sekarang lewat tautan ini.” Apa langkah paling aman?",
    options: ["Klik tautan dan isi data agar akun tidak diblokir.", "Jangan klik; periksa akun lewat aplikasi atau situs resmi.", "Teruskan pesan ke teman untuk memastikan."],
    answer: 1,
    feedback: "Tepat! Pesan bernada mendesak sering digunakan untuk memancing kepanikan. Buka aplikasi atau situs resmi secara mandiri."
  },
  {
    tag: "IZIN APLIKASI",
    question: "Aplikasi kalkulator meminta akses ke kontak dan lokasi. Apa yang sebaiknya kamu lakukan?",
    options: ["Setujui semua izin agar aplikasi berjalan lancar.", "Tolak izin yang tidak relevan dan cari tahu alasan permintaannya.", "Bagikan izin hanya saat menggunakan Wi-Fi."],
    answer: 1,
    feedback: "Benar! Izin harus sesuai fungsi. Kamu dapat menolak atau mencabut akses yang tidak diperlukan melalui pengaturan perangkat."
  },
  {
    tag: "KEAMANAN AKUN",
    question: "Seseorang yang mengaku petugas layanan meminta kode OTP untuk “memverifikasi” akunmu. Apa respons terbaik?",
    options: ["Berikan kode jika orang itu tahu nama lengkapmu.", "Jangan berikan OTP; hubungi layanan dari kanal resminya.", "Kirim tangkapan layar pesan agar akun cepat dicek."],
    answer: 1,
    feedback: "Betul! OTP adalah rahasia. Petugas resmi tidak memerlukan kode OTP-mu untuk memverifikasi akun."
  }
];

const checklistKeys = ["password", "mfa", "permissions", "links", "updates"];
const storage = {
  read(key, fallback) {
    try {
      const saved = localStorage.getItem(key);
      return saved === null ? fallback : JSON.parse(saved);
    } catch (error) {
      console.warn("Penyimpanan lokal tidak tersedia:", error);
      return fallback;
    }
  },
  write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn("Progres tidak dapat disimpan di perangkat ini:", error);
    }
  }
};

const completedLessons = new Set(storage.read("ruangAmanLessons", []));
let currentLesson = null;
let currentQuestion = 0;
let quizScore = 0;
let answered = false;
let toastTimer;

const progressBar = document.querySelector("#progressBar");
const progressPercent = document.querySelector("#progressPercent");
const progressText = document.querySelector("#progressText");
const dialog = document.querySelector("#lessonDialog");
const dialogBody = document.querySelector("#dialogBody");
const dialogPosition = document.querySelector("#dialogPosition");
const toast = document.querySelector("#toast");

function updateProgress() {
  const completed = completedLessons.size;
  const percent = Math.round(completed / lessons.length * 100);
  progressBar.style.width = `${percent}%`;
  progressPercent.textContent = `${percent}% selesai`;
  progressText.textContent = completed === 0
    ? "Baru dimulai — yuk mulai dari materi pertama!"
    : completed === lessons.length
      ? "Hebat! Semua materi sudah kamu selesaikan."
      : `${completed} dari ${lessons.length} materi selesai — teruskan!`;
  lessons.forEach((lesson) => {
    const card = document.querySelector(`[data-lesson="${lesson.id.slice(-1)}"]`);
    if (card) {
      card.classList.toggle("completed", completedLessons.has(lesson.id));
      const button = card.querySelector(".lesson-open");
      button.innerHTML = completedLessons.has(lesson.id)
        ? 'Sudah dipelajari <span>✓</span>'
        : 'Pelajari materi <span>↗</span>';
    }
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function openLesson(id) {
  currentLesson = lessons.find((lesson) => lesson.id === id);
  if (!currentLesson) return;
  dialogBody.innerHTML = `
    <article class="dialog-content">
      <span class="scenario-tag">MATERI ${String(lessons.indexOf(currentLesson) + 1).padStart(2, "0")}</span>
      <h2 id="dialogTitle">${currentLesson.title}</h2>
      <p>${currentLesson.intro}</p>
      <section class="lesson-objectives">
        <h3>Setelah mempelajari materi ini, kamu dapat:</h3>
        <ul>${currentLesson.objectives.map((objective) => `<li>${objective}</li>`).join("")}</ul>
      </section>
      ${currentLesson.sections.map((section) => `
        <section class="lesson-topic">
          <h3>${section.title}</h3>
          ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          ${section.bullets?.length ? `<ul>${section.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
        </section>`).join("")}
      <section class="lesson-exercise">
        <h3>${currentLesson.practiceTitle}</h3>
        <div class="dialog-callout">${currentLesson.practice}</div>
      </section>
      <section class="lesson-summary">
        <h3>Rangkuman</h3>
        <ol>${currentLesson.takeaways.map((item) => `<li>${item}</li>`).join("")}</ol>
      </section>
    </article>`;
  const completed = completedLessons.has(id);
  document.querySelector("#markComplete").innerHTML = completed
    ? 'Materi selesai <span>✓</span>'
    : 'Tandai selesai <span>✓</span>';
  document.querySelector("#markComplete").disabled = completed;
  document.querySelector("#markComplete").style.opacity = completed ? ".7" : "1";
  dialogPosition.textContent = `Materi ${lessons.indexOf(currentLesson) + 1} dari ${lessons.length}`;
  dialog.showModal();
}

document.querySelectorAll("[data-open-lesson]").forEach((button) => {
  button.addEventListener("click", () => openLesson(button.dataset.openLesson));
});
document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.querySelector("#markComplete").addEventListener("click", () => {
  if (!currentLesson) return;
  completedLessons.add(currentLesson.id);
  storage.write("ruangAmanLessons", [...completedLessons]);
  updateProgress();
  dialog.close();
  showToast("Materi selesai! Progres belajarmu sudah diperbarui.");
});

function renderQuestion() {
  const content = document.querySelector("#quizContent");
  const question = quizQuestions[currentQuestion];
  if (!question) {
    document.querySelector("#quizStep").innerHTML = '✓ <span>SELESAI</span>';
    document.querySelector("#quizProgress").style.width = "100%";
    content.innerHTML = `
      <div class="quiz-result">
        <div class="result-icon">${quizScore === quizQuestions.length ? "✦" : "✓"}</div>
        <h3>${quizScore} dari ${quizQuestions.length} jawaban tepat!</h3>
        <p>${quizScore === quizQuestions.length ? "Naluri digitalmu tajam. Pertahankan kebiasaan amannya!" : "Terus berlatih — membaca ulang materi bisa membantu."}</p>
        <button type="button" id="quizRestart">Coba lagi ↻</button>
      </div>`;
    content.querySelector("#quizRestart").addEventListener("click", restartQuiz);
    return;
  }
  answered = false;
  document.querySelector("#quizStep").innerHTML = `${String(currentQuestion + 1).padStart(2, "0")} <span>/ 03</span>`;
  document.querySelector("#quizProgress").style.width = `${currentQuestion / quizQuestions.length * 100}%`;
  content.innerHTML = `
    <span class="scenario-tag">${question.tag}</span>
    <h3 class="quiz-question">${question.question}</h3>
    <div class="quiz-options">${question.options.map((option, index) => `
      <button class="quiz-option" type="button" data-option="${index}">
        <span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>
      </button>`).join("")}
    </div>
    <p class="quiz-feedback" id="quizFeedback" aria-live="polite"></p>`;
  content.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => answerQuestion(Number(button.dataset.option)));
  });
}

function answerQuestion(selected) {
  if (answered) return;
  answered = true;
  const question = quizQuestions[currentQuestion];
  const options = document.querySelectorAll(".quiz-option");
  options.forEach((option, index) => {
    option.disabled = true;
    if (index === question.answer) option.classList.add("correct");
    if (index === selected && selected !== question.answer) option.classList.add("incorrect");
  });
  if (selected === question.answer) quizScore += 1;
  const feedback = document.querySelector("#quizFeedback");
  feedback.textContent = selected === question.answer
    ? question.feedback
    : `Belum tepat. ${question.feedback}`;
  const next = document.createElement("button");
  next.className = "quiz-next";
  next.type = "button";
  next.textContent = currentQuestion === quizQuestions.length - 1 ? "Lihat hasil →" : "Lanjut →";
  next.addEventListener("click", () => {
    currentQuestion += 1;
    renderQuestion();
  });
  feedback.after(next);
}

function restartQuiz() {
  currentQuestion = 0;
  quizScore = 0;
  answered = false;
  renderQuestion();
}

function updateChecklist() {
  const saved = storage.read("ruangAmanChecklist", {});
  let score = 0;
  checklistKeys.forEach((key) => {
    const checkbox = document.querySelector(`[data-check="${key}"]`);
    checkbox.checked = Boolean(saved[key]);
    if (checkbox.checked) score += 1;
  });
  document.querySelector("#checkScore").textContent = score;
  document.querySelectorAll(".check-row input").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const current = storage.read("ruangAmanChecklist", {});
      current[checkbox.dataset.check] = checkbox.checked;
      storage.write("ruangAmanChecklist", current);
      const checked = document.querySelectorAll(".check-row input:checked").length;
      document.querySelector("#checkScore").textContent = checked;
      if (checked === checklistKeys.length) showToast("Luar biasa — semua kebiasaan aman sudah ditandai!");
    });
  });
}

document.querySelectorAll(".glossary-item").forEach((item) => {
  item.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    item.setAttribute("aria-expanded", String(isOpen));
    item.querySelector("i").textContent = isOpen ? "−" : "+";
  });
  item.setAttribute("aria-expanded", "false");
});

const menuToggle = document.querySelector("#menuToggle");
const sidebar = document.querySelector("#sidebar");
menuToggle.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Tutup navigasi" : "Buka navigasi");
});
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    sidebar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
document.querySelector("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  document.querySelector("#themeToggle").setAttribute("aria-label", isDark ? "Gunakan tampilan terang" : "Gunakan tampilan gelap");
  storage.write("ruangAmanDarkMode", isDark);
});

if (storage.read("ruangAmanDarkMode", false)) document.body.classList.add("dark-mode");
updateProgress();
updateChecklist();
renderQuestion();
