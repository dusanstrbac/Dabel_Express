export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    // Solucije sta sve moze biti neki korisnik na web-u
    role: "Administrator" | "Komercijalista" | "Gost";
}