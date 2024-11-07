const soal = [
    { soal: "5 + 3", operator: "+", jawaban: 8 },
    { soal: "10 - 7", operator: "-", jawaban: 3 },
    { soal: "100 - 99", operator: "-", jawaban: 1 },
    { soal: "3 + 10", operator: "-", jawaban: 13 },
    { soal: "10 + 90", operator: "-", jawaban: 100 },
    { soal: "10 x 10", operator: "-", jawaban: 100 },
    { soal: "5 x 7", operator: "-", jawaban: 35 },
    { soal: "10 : 5", operator: "-", jawaban: 2 },
    { soal: "11 x 5", operator: "-", jawaban: 55 },
    { soal: "12 x 5", operator: "-", jawaban: 60 },
    { soal: "101 + 49", operator: "-", jawaban: 150 },
    { soal: "20 + 30", operator: "-", jawaban: 50 },
    // Tambahkan lebih banyak soal di sini
  ];
  
  let soalAktif = 0;
  let skor = 0;
  let waktuSisa = 30; // Waktu dalam detik
  let timerInterval;
  
  function generateSoal() {
    // Acak indeks soal
    soalAktif = Math.floor(Math.random() * soal.length);
  
    // Tampilkan soal
    document.getElementById('soal').textContent = soal[soalAktif].soal;
  
    // Mulai timer
    startTimer();
  }
  
  function cekJawaban() {
    const jawabanUser = parseInt(document.getElementById('jawaban').value);
    const jawabanBenar = soal[soalAktif].jawaban;
  
    if (jawabanUser === jawabanBenar) {
      skor++;
      document.getElementById('hasil').textContent = "Benar!";
    } else {
      document.getElementById('hasil').textContent = "Salah. Jawaban yang benar adalah " + jawabanBenar;
    }
  
    // Generate soal baru setelah 2 detik
    setTimeout(generateSoal, 2000);
  }
  
  function startTimer() {
    timerInterval = setInterval(() => {
      waktuSisa--;
      document.getElementById('timer').textContent = `Waktu sisa: ${waktuSisa} detik`;
  
      if (waktuSisa === 0) {
        clearInterval(timerInterval);
        alert(`Waktu habis! Skor Anda: ${skor}`);
        generateSoal(); // Mulai soal baru
      }
    }, 1000);
  }
  
  // Panggil fungsi generateSoal() saat halaman dimuat
  window.onload = generateSoal;