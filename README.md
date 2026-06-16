# 🔬 Scientific Unit Converter V2.7

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-Web_Framework-000000?style=flat&logo=flask&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-Structure-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-Styling-1572B6?style=flat&logo=css3&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-Persistent_History-FF8C00?style=flat)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)
![Version](https://img.shields.io/badge/Version-2.7-FF8C00?style=flat)

> A polished, dark-themed web converter with persistent history, swap functionality, one-click copy, active category highlighting, and now full Temperature conversion support — extending V2.5's UX upgrade with a new unit category.

---

## 📸 Preview

<p align="center">
  <img src="screenshot/unit_converterV2.7.png" alt="App Screenshot" width="900"/>
</p>

---

## 🆕 What's New in V2.7

| # | Feature | Description |
|---|---|---|
| 🌡️ | **Temperature Category** | New 5th category added to the sidebar and dropdowns — Celsius, Fahrenheit, Kelvin |
| 🧮 | **Offset-Based Conversion Logic** | Temperature uses dedicated formula-based conversion (`convert_temperature`) instead of simple factor math, since temperature scales aren't purely multiplicative |
| ✅ | **V3 Roadmap Progress** | Temperature support — previously planned for V3 — is now live in V2.7 |

---

## ✨ Previously in V2.5

| # | Feature | Description |
|---|---|---|
| ⇅ | **Swap Button** | Instantly swap From ↔ To units with a single click. Rotates 180° on hover. |
| 📋 | **Copy Result** | One-click clipboard copy with a "Copied!" confirmation that resets after 2s |
| 💾 | **Persistent History** | Conversion history saved to `localStorage` — survives page refresh and browser close |
| 🗑️ | **Clear History** | Wipe the history panel and `localStorage` in one click |
| 🟠 | **Active Category Highlight** | Selected category button glows with an orange box-shadow so you always know where you are |

---

## ✨ Full Feature Set

| Feature | V1 | V2.5 | V2.7 |
|---|:---:|:---:|:---:|
| 4+ Unit Categories | ✅ | ✅ | ✅ |
| Temperature Conversions (°C / °F / K) | ❌ | ❌ | ✅ |
| Async Conversion (no reload) | ✅ | ✅ | ✅ |
| Session History Panel | ✅ | ✅ | ✅ |
| Dark Theme + Orange Accent | ✅ | ✅ | ✅ |
| Swap From ↔ To Units | ❌ | ✅ | ✅ |
| Copy Result to Clipboard | ❌ | ✅ | ✅ |
| Persistent History (localStorage) | ❌ | ✅ | ✅ |
| Clear History Button | ❌ | ✅ | ✅ |
| Active Category Highlight + Glow | ❌ | ✅ | ✅ |

---

## 🗂️ Project Structure

```
scientific-unit-converter/
│
├── app.py              # 🚀 Flask server — routes and /convert API endpoint
├── converter.py        # 🧠 Conversion logic, unit registry, and temperature formulas
├── requirements.txt    # 📦 Python dependencies
│
├── templates/
│   └── index.html      # 🏗️  Main layout — swap btn, copy btn, clear history, Temperature category
│
└── static/
    ├── style.css       # 🎨 Swap animation, glow effect, copy & clear btn styles
    └── script.js       # ⚙️  localStorage persistence, swap logic, clipboard API, Temperature units
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Backend** | [Flask](https://flask.palletsprojects.com/) | API routing & Jinja2 template serving |
| **Conversion Engine** | Python | Base-value normalization math + dedicated temperature formulas |
| **Frontend** | HTML5 + CSS3 | Layout, dark theme, button animations |
| **Interactivity** | Vanilla JavaScript (ES6+) | Async fetch, swap, clipboard, localStorage |
| **Persistence** | Web LocalStorage API | History survives refresh & browser close |

---

## 🧠 Conversion Engine

Most units are stored relative to a **base unit**. Conversion is a two-step normalization:

```
Input × from_unit_factor
─────────────────────────  =  Result
    to_unit_factor
```

**Temperature is the exception** — since Celsius, Fahrenheit, and Kelvin aren't related by a simple multiplicative factor (they involve offsets), temperature conversions are handled by a dedicated `convert_temperature()` function with explicit formulas for each direction.

### Supported Units

| Category | Base Unit | Units |
|---|---|---|
| 📏 **Length** | Meter | Meter, Kilometer, Centimeter, Millimeter, Inch, Foot, Yard, Mile |
| ⚖️ **Mass** | Kilogram | Kilogram, Gram, Milligram, Pound, Ounce |
| 🧪 **Volume** | Liter | Liter, Milliliter, Cubic Meter, Gallon |
| 💨 **Speed** | m/s | m/s, km/h, mph |
| 🌡️ **Temperature** | — (formula-based) | Celsius, Fahrenheit, Kelvin |

---

## 🌐 API Reference

### `POST /convert`

**Request**
```json
{
    "category": "Mass",
    "value": 25,
    "from_unit": "Pound",
    "to_unit": "Kilogram"
}
```

**Response**
```json
{
    "result": 11.3398
}
```

**Temperature Example**
```json
{
    "category": "Temperature",
    "value": 100,
    "from_unit": "Celsius",
    "to_unit": "Fahrenheit"
}
```

**Response**
```json
{
    "result": 212.0
}
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Python 3.10+
- pip

### Install & Run

```bash
pip install flask
python app.py
```

Open in browser:
```
http://127.0.0.1:5000
```

---

## 🔮 Planned for V3

- [ ] 🔍 Unit search filter in dropdowns
- [ ] 📊 Conversion history chart
- [ ] 🌐 Deploy to Render / Railway
- [ ] 📱 Mobile responsive layout

---

## 👨‍💻 Author

**Yash Kumar Singh**

Built with ❤️ — V2.7 adds full Temperature conversion support on top of V2.5's UX polish.