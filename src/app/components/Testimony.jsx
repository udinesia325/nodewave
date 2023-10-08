import React from "react";

const items = [
  {
    name: "Ahmad Prasetyo",
    text: `Buat aplikasi sama tim ini emang luar biasa dicarikan
        solusi yang paling murah supaya bisa segera mulai
        aplikasi PPOB saya. 2 minggu udah jadi hasilnya
        saya tinggal fokus di promosi! Terima kasih Nodewave.`,
  },
  {
    name: "Laras Ratnadewi",
    text: `Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.`,
  },
  {
    name: "Yusuf Uwais",
    text: `Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!`,
  },
];

function Testimony() {
  return (
    <div className="pl-4">
      <h3 className="text-white text-lg font-semibold mt-16">Testimony</h3>
      <div className="mt-10 flex flex-row gap-10 overflow-x-auto w-full pb-4">
        {items.map((item, index) => (
          <div key={index} className="flex-none bg-white p-3 rounded-md text-slate-800 w-[410px] flex flex-col justify-between">
            <p className="text-sm">{item.text}</p>
            <h3 className="text-primary mt-3">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimony;
