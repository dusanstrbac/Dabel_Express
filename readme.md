# Backend Express Project

Ovaj projekat predstavlja backend zasnovan na Express.js framework-u. Napravljen je .Net web API koji ce nam služiti kako bih mogli da pozivamo objekte iz baze podataka.

## Sadržaj

- [Opis](#opis)
- [Zahtevi](#zahtjevi)
- [Instalacija](#instalacija)
- [Pokretanje](#pokretanje)
- [Struktura Projekta](#struktura-projekta)
- [Upotreba API-a](#upotreba-apija)
- [Preostalo uraditi](#preostalo-uraditi)

## Opis

Kreiran je za sada auth ( autentifikacioni ) segment backend-a, koji u sebi sadrži proveru korisnikovog logovanja na aplikaciju.
Funkcioniše tako što se preume segment koji API sadrži kod sebe, i pretvara ga u objekat sa kojim se kasnijež
može lako manipulisati.  

## Zahtevi

Da bi se projekat pokrenuo, potrebno je imati sledeće alate:

- **Node.js** (preporučena verzija: 16.x.x ili novija)
- **npm** (Node Package Manager) ili **yarn** (ako koristite yarn)
- **Git** (za upravljanje verzijama i kloniranje repozitorijuma) - Može online verzija !
- **SSL Certifikat** (ako testirate HTTPS lokalno, koristiće se agent sa `rejectUnauthorized: false`)

## Instalacija i pokretanje

1. **Kloniranje repozitorijuma**

   git clone https://github.com/putanja-do-repozitorijuma.git
   cd naziv-projekta

2. **S`obzirom da je sve ostalo instalirano već u njemu dovoljno je samo pokrenuti projekat**

    npm run dev

3. **Imajte u vidu da ukoliko radite proveru, API mora biti uključen inače nećete dobijati nikakve rezultate**

    Link do preuzimanja API-ja

## Struktura projekta
```
/naziv-projekta
│
├── /node_modules/            # Folder sa instaliranim npm paketima
├── /src/                     # Izvorni kod aplikacije
│   ├── /routes/              # Sve Express rute
│   ├── /controllers/         # Logika vezana za rute
│   ├── /middleware/          # Middleware za autentifikaciju i druge funkcije
│   ├── /models/              # Modeli podataka ( Kao i kod API-a, ovde se isto prave modeli )
│   └── app.js                # Glavna konfiguracija Express aplikacije
├── .gitignore                # Fajl koji sadrži listu fajlova koji treba da se ignorišu od strane Git-a
├── package.json              # Informacije o projektu
├── README.md                 
└── .env                      # Promenljiva okruženja ( Kasnije tek implementacija )
```
## Upotreba API-a

U samom kodu API-a se nalaze razne funkcije preko kojih možemo doći do nekog segmenta u bazi podaka.
Svaka putanja koju API koristi i vraća kao rezultat pretrage, on je skladišti na web-u ( port 7146 ).
Kada se pokrene Swagger i kada se Execut-a neka od funkcija, on ce ostaviti link putanje kako se dolazi do tog rezultata koji je on poslao kao odgovor iz baze podataka.

## Preostalo uraditi

# 1. Login sekcija
- Proveriti i implementirati korisničke TOKENE
- Uraditi BCrypt korisničkih lozinki ukoliko je potrebno ( update baze sa ovim )
- Kreiranje backend korisničkog modela shodno objektu koji dolazi iz API-a
- Uraditi permisije za različite uloge na web-u

# 2. Register sekcija
- Kreirati u auth ruti kompletnu register sekciju ( auth.put )
- Implementirati proveru ukoliko korisnik sa određenim ( unique ) podacima već postoji
- Upis u bazu podataka ( provera u bazi je obavezna )

# 3. Middleware 
Middleware je sekcija u kojoj se nalaze permisije korisnika. Izvlači se korisnički TOKEN u kom se nalzi njegova uloga i shodno njoj web aplikacija dozvoljava / nedozvoljava pristup na odredjenu rutu.
npr. Na admin panel će moći samo korisnik koji u svom tokenu ima admin permisiju da pristupi ovom linku ili ukoliko korisnik nije uopšte ni ulogovam ( aplikacija ne čita korisnički token ), automatski ga prebacuje na login sekciju da bih mogao da pristupi nekim poslovnim panelima sajta.
