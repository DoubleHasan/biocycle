const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const products = [
  {
    title: "Protein Tozu",
    desc: "CO₂ emalı nəticəsində əldə olunan davamlı və alternativ protein məhsulu."
  },
  {
    title: "Amin Turşuları",
    desc: "Qida, sağlamlıq və sənaye sahələrində istifadə edilə bilən bioloji birləşmələr."
  },
  {
    title: "Qida Əlavələri",
    desc: "Daha sağlam və funksional qidalanma üçün istehsal olunan əlavələr."
  },
  {
    title: "Vitamin Dəstəyi",
    desc: "Qida və farmasevtika sektorunda istifadə üçün nəzərdə tutulan dəstək məhsulları."
  }
];

const stats = {
  co2: 1250,
  protein: 340,
  efficiency: 87,
  temperature: 36,
  ph: 6.8,
  pressure: 1.4
};

const roadmap = [
  "Elmi araşdırma və mikroorqanizmlərin seçilməsi",
  "Pilot bioreaktorun qurulması və sınaq mərhələsi",
  "AI və IoT monitorinq sisteminin inteqrasiyası",
  "Sənaye miqyasında istehsal və bazara çıxış"
];

const team = [
  {
    name: "Selen Kəlbalıyeva",
    role: "Layihə rəhbəri"
  },
  {
    name: "Həsən Həsənov",
    role: "IT mütəxəssisi və araşdırmaçı"
  }
];

app.get("/", (req, res) => {
  res.render("index", { products, stats, roadmap, team });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Yeni əlaqə formu:");
  console.log("Ad:", name);
  console.log("Email:", email);
  console.log("Mesaj:", message);

  res.send(`
    <!DOCTYPE html>
    <html lang="az">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mesaj göndərildi</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #eef7f2, #f8fcfa);
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          color: #163c33;
        }
        .box {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          text-align: center;
          max-width: 500px;
        }
        h2 {
          margin-bottom: 12px;
          color: #0f5c4d;
        }
        p {
          margin-bottom: 20px;
          font-size: 17px;
        }
        a {
          display: inline-block;
          padding: 12px 22px;
          background: #0f5c4d;
          color: white;
          text-decoration: none;
          border-radius: 10px;
        }
        a:hover {
          background: #0c4b3f;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h2>Təşəkkürlər, ${name}!</h2>
        <p>Mesajınız uğurla qəbul olundu.</p>
        <a href="/">Ana səhifəyə qayıt</a>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});